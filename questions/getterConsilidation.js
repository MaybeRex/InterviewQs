/*
Implement a method that combines a list of getter method that take a string and a callbak
Must have same interface
  [getAnimals(str, () => Array<Results>), getMountains(str, () => Array<Results>)] --->
  getAll(str,  () => Array<Results>)
*/

const getAnimals = (str, cb) => {
  setTimeout(() => {
    cb(['dog', 'dingo', 'dolphin']);
  }, 300);
};

const getMountains = (str, cb) => {
  setTimeout(() => {
    cb(['Domuyo', 'Dos Contos', 'Del Leon']);
  }, 300);
};

const getElements = (str, cb) => {
  setTimeout(() => {
    cb(['Dysprosium', 'Dubnium', 'Darmstadtium']);
  }, 500);
};

const getAll = (str, cb, getters) => {
  const ansList = [];
  const init = Date.now();
  const cbHandler = (res) => {
    ansList.push(res);
    if (ansList.length !== getters.length) {
      return;
    }

    const flattenedAns = ansList.reduce((accum, list) => {
      accum.push(...list);
      return accum;
    }, []);

    console.log(`Done in ${Date.now() - init} ms`);
    cb(flattenedAns);
  };

  for (let i = 0; i < getters.length; i += 1) {
    getters[i](str, cbHandler);
  }
};

getAll('', ((ansList) => {
  console.log(ansList);
}), [getAnimals, getElements, getMountains]);
