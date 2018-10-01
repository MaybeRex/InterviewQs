const isPalindrome = (num) => {
  const str = num.toString();

  if (str.length === '1') {
    return true;
  }

  let center = 0;
  let rightBoundry = 0;
  let leftBoundry = 0;

  const workingArr = ['$', '#', ...str.split('').join('#').split(''), '#', '@'];
  const score = new Array(workingArr.length);
  score.fill(0);

  for (let i = 1; i < workingArr.length - 1; i += 1) {
    const mirror = (2 * center) - i;

    if (i < rightBoundry) {
      score[i] = Math.min(rightBoundry - i, score[mirror]);
    }

    while (workingArr[i + (score[i])] === workingArr[i - (score[i])]) {
      score[i] += 1;
    }

    if ((i + score[i]) > rightBoundry) {
      center = i;
      rightBoundry = i + score[i];
      leftBoundry = i - score[i];
    }
  }

  return leftBoundry === 0;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
