/* eslint-disable no-restricted-syntax */
/*
Given an array of paths, print them out in a tree fashion compiled together

Input = [
  'src/components/Header',
  'src/components/Footer',
  'src/tests/components/Header',
  'docker.config',
  'webpack.json',
  'src/tests/components/Footer'
]

{
  src: {
    components: {
      Header: {},
      Footer: {},
    },
    tests: {
      components: {
        Header: {},
        Footer: {},
      },
    }
  }
}
*/

const dfs = (list, obj) => {
  if (!list.length) {
    return;
  }

  const current = list.shift();

  if (!obj[current]) {
    obj[current] = {};
  }

  dfs(list, obj[current]);
};

const dfsPrint = (obj, currentLevel) => {
  let spaces = '';

  for (let i = 0; i < currentLevel; i += 1) {
    spaces += '    ';
  }

  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    console.log(`${spaces}${key}`);
    dfsPrint(obj[key], currentLevel + 1);
  }
};

const printPaths = (pathList) => {
  for (let i = 0; i < pathList.length; i += 1) {
    pathList[i] = pathList[i].split('/');
  }

  const obj = {};

  for (let i = 0; i < pathList.length; i += 1) {
    dfs(pathList[i], obj);
  }

  const currentLevel = 1;
  dfsPrint(obj, currentLevel);

  return true;
};

console.log(printPaths(
  [
    'src/components/Header',
    'src/components/Footer',
    'src/tests/components/Header',
    'docker.config',
    'webpack.json',
    'src/tests/components/Footer',
  ],
));
