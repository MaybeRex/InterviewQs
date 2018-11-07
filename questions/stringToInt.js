/*
  Implement atoi to convert a string to an integer.
 */

const myAtoi = (str) => {
  const firsrChar = str.trim()[0];
  const invalid = isNaN(Number(firsrChar));
  const whiteList = ['-', '+'];

  if (invalid && !whiteList.includes(firsrChar)) {
    return 0;
  }

  const max = (2 ** 31) - 1;
  const min = -1 * (max + 1);
  const trimmed = parseInt(str, 10);

  if (trimmed < min) {
    return min;
  }

  if (trimmed > max) {
    return max;
  }
  return isNaN(trimmed) ? 0 : trimmed;
};

console.log(myAtoi('-1'));
