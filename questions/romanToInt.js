const lookup = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const romanToInt = (str) => {
  const workingRoman = str.split('').reverse().join('');
  let ans = 0;
  for (let i = 0; i < workingRoman.length; i += 1) {
    const letter = workingRoman[i];
    const lookupValue = lookup[letter];

    // if current ans is 4 * greater than current lookup, is must be a subtractions
    // since we go thru this array backwards
    if (lookupValue * 4 < ans) {
      ans -= lookupValue;
      continue;
    }

    // otherwise, its an addition
    ans += lookupValue;
  }

  return ans;
};

console.log(romanToInt('MMII'));
console.log(romanToInt('MMIV'));
