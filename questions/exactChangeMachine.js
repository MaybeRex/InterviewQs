/*
  implement an exact change machine
  input: [10, 15, 20], 35 --> true
  input: [10, 9, 5, 1], 16 --> true
  input: [10, 9, 9, 5, 5, 1], 21 --> true
 */

const exactChange = (coins, target) => {
  const sortedCoins = coins.slice().sort((a, b) => a - b).reverse();
  let targetCopy = target;
  for (let i = 0; i < sortedCoins.length; i += 1) {
    const value = sortedCoins[i];
    targetCopy -= value;

    if (targetCopy === 0) {
      return true;
    }

    if (target < 0) {
      break;
    }
  }

  const ansArray = [];
  for (let i = 0; i < sortedCoins.length; i += 1) {
    ansArray.push(
      exactChange([...sortedCoins.slice(0, i), ...sortedCoins.slice(i + 1)], target),
    );
  }

  return ansArray.includes(true);
};

console.log(exactChange([10, 15, 20], 35));
console.log(exactChange([10, 9, 5, 1], 16));
console.log(exactChange([10, 9, 9, 5, 5, 1], 21));
