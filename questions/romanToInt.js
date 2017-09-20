/*

  Given a roman numeral, convert it to an integer.
  Input is guaranteed to be within the range from 1 to 3999.

 */

function romanToInt(s) {
  const lookup = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  let ans = 0;
  for(let i = s.length - 1; i >= 0; i--) {
    const current = lookup[s[i]];

    if((current * 4) < ans) {
      ans -= current;
      continue;
    }

    ans += current;
  }

  return ans;
}

console.log(romanToInt('MMII'));
console.log(romanToInt('MMIV'));
