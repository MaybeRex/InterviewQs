/*
  Implement atoi to convert a string to an integer.
 */

function myAtoi(str) {
  const max = 2147483647;
  const min = -2147483648;

  let ans = '';
  let isNeg = 1;
  let isGarbage = false;
  let foundLetter = false;

  if(str[0] === ' ') {
    isGarbage = true;
    str = str.trim();
  }

  if(str[0] === '-') {
    isNeg = -1;
    isGarbage = true;
    str = str.substring(1);
  }

  for(let i = 0; i < str.length; i++) {
    if(!isNaN(str[i])) {
      ans += str[i];
    } else {
      if(ans === '' && !isGarbage) {
        isGarbage = true;
        continue;
      }
      break;
    }
  }

  let num = Number(ans.split(' ')[0]);

  if(isNaN(num)) {
    return 0;
  }

  num = num * isNeg

  if(num < min) {
    return min;
  }

  if(num > max) {
    return max;
  }

  return num;
}

console.log(myAtoi('   +4005'));
