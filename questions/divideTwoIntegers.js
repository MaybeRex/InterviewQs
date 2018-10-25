const extractNeg = (numStr) => {
  if (numStr[0] === '-') {
    return -1;
  }
  return 1;
};

const dividePositive = (dividend, divisor) => {
  dividend = Number(dividend);
  divisor = Number(divisor);

  let ans = 0;

  while (Math.abs(dividend) >= Math.abs(divisor)) {
    dividend -= divisor;
    ans += 1;
  }

  return [ans, dividend];
};

const divide = (top, bottom) => {
  const max = (2 ** 31) - 1;
  const min = -(2 ** 31);

  if (bottom === 0) {
    return Infinity;
  }

  if (top === 0) {
    return 0;
  }

  top = top.toString();
  bottom = bottom.toString();
  const topNegative = extractNeg(top);
  const bottomNegative = extractNeg(bottom.toString());

  if (topNegative === -1) {
    top = top.slice(1);
  }

  if (bottomNegative === -1) {
    bottom = bottom.slice(1);
  }


  let current = '';
  let currentAns = '';
  while (top.length) {
    if (!current.length || (Number(current) < bottom)) {
      const nextFirst = top.slice(0, 1);
      top = top.slice(1);
      current += nextFirst;

      if ((Number(current) < bottom)) {
        currentAns += '0';
      }
      continue;
    }

    const ans = dividePositive(current, bottom);
    currentAns += ans.shift();
    current = ans.shift();
  }

  if (Number(current) >= bottom) {
    const ans = dividePositive(current, bottom);
    currentAns += ans.shift();
    current = ans.shift();
  }


  if (bottomNegative === -1 && topNegative === -1) {
    const final = Number(currentAns);
    return final > max ? max : final;
  }

  if (bottomNegative === -1 || topNegative === -1) {
    const final = Number(currentAns);
    return final < min ? min : -final;
  }


  const final = Number(currentAns);
  return final > max ? max : final;
};

console.log(divide(1000, 3) === 333);
console.log(divide(7, -3) === -2);
console.log(divide(-2147483648, -1) === 2147483647);
console.log(divide(1, -1) === -1);
console.log(divide(1, 1) === 1);
console.log(divide(-1, -1) === 1);
console.log(divide(2147483647, 2) === 1073741823);
