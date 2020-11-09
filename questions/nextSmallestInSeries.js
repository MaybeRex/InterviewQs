const swap = (first, second, str) => {
  const temp = str[first];
  str[first] = str[second];
  str[second] = temp;
  return str;
};

const nextSmallestInSeries = (num) => {
  const numStr = num.toString().split('');

  for (let i = numStr.length - 1; i >= 0; i -= 1) {
    if (i - 1 < 0) {
      return num;
    }
    // we get n^2 here unfortunately at worse case
    const swapped = parseInt(swap(i, i - 1, [...numStr]).join(''), 10);
    if (swapped > num) {
      return swapped;
    }
  }

  return num;
};

console.log(nextSmallestInSeries(859));
console.log(nextSmallestInSeries(1490));
