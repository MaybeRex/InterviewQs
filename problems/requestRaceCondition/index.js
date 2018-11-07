// NOTE theoredically this is done, CORS stops me from proceeding
// https://stackoverflow.com/questions/29954037/why-is-an-options-request-sent-and-can-i-disable-it
function formHandler(e) {
  e.preventDefault();
  const input = this.querySelector('input');
  const value = input.value.trim();

  if (value.length < 3) {
    return;
  }

  if (window.searchLoading.dataset.loading === 'false') {
    window.searchLoading.dataset.loading = 'true';
  }

  const current = new Date().getTime();

  window.requestLog.set(current, 'pending');

  window.axiosInstance({
    method: 'get',
    url: `${value}/antonyms`,
    headers: window.requestHeaders,
  }).then((res) => {
    window.requestLog.set(current, 'done');
    if (current < window.latestShown) {
      return;
    }

    console.log(res);
  }).catch((e) => {
    window.requestLog.set(current, 'failed');
    if (current < window.latestShown) {
      return;
    }

    window.alert(`Latest failed! : ${e.message}`);
  }).then(() => {
    window.searchLoading.dataset.loading = 'false';
  });
}

function bindListeners() {
  const form = document.body.querySelector('#search-form');
  form.addEventListener('submit', formHandler);
}

function createAxiosInstance() {
  window.axiosInstance = axios.create({
    baseURL: 'https://od-api.oxforddictionaries.com/api/v1/entries/en',
  });

  window.requestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    app_id: '7c5f10b2',
    app_key: '1145a6e7fa70d4fcc33ae9944e906c3b',
  };
}

function queryComponents() {
  window.searchLoading = document.body.querySelector('#loading');
}

function startRequestCounter() {
  window.requestLog = new Map();
  window.latestShown = null;
}

function init() {
  bindListeners();
  queryComponents();
  createAxiosInstance();
  startRequestCounter();
}

window.addEventListener('DOMContentLoaded', init);
