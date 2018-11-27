/*
Implement a method that tells you the maximum amount of of profit possible for a stock price given
the prices of a stock each day of the week
  Input:  [3, 4, 5, 6, 7]
  Ans:    5 * maxUnitsPossible
*/

const calculateOptimal = (list, diff = 0) => {
  if (!list.length) {
    return diff;
  }

  const listCopy = list.slice();
  let firstLowest = listCopy.shift();
  let firstLowestIndex = 1;

  for (let i = 0; i < listCopy.length; i += 1) {
    const val = listCopy[i];
    if (val > firstLowest) {
      continue;
    }

    firstLowest = val;
    firstLowestIndex = i;
    break;
  }


  for (let i = firstLowestIndex; i < listCopy.length; i += 1) {
    const val = listCopy[i];
    if (val > firstLowest) {
      diff += val - firstLowest;
      return calculateOptimal(listCopy.slice(i), diff);
    }
  }

  return diff;
};

const optimalStockPrice = (list, maxStorage = 1) => calculateOptimal(list) * maxStorage;

console.log(optimalStockPrice([3, 4, 5, 6, 8]) === 5);
console.log(optimalStockPrice([8, 7, 6, 5, 4]) === 0);
console.log(optimalStockPrice([8, 1, 9, 1, 10]) === 17);
