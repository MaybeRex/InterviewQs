function crossSubarray(array, left, middle, right) {
  let leftSum = -Infinity;
  let rightSum = -Infinity;
  let sum = 0;
  // Include elements on left of mid
  for (var i = middle; i >= left; i--) {
    if (sum + array[i] >= leftSum) {
      leftSum = sum + array[i];
    }
    sum += array[i];
  }
  sum = 0;
  // Include elements on right of mid
  for (var i = middle + 1; i < right; i++) {
    if (sum + array[i] >= rightSum) {
      rightSum = sum + array[i];
    }
    sum += array[i];
  }
  return leftSum + rightSum;
}

function maxSubarrayPartitioner(array, left, right) {
  if (right - left <= 1) {
    return array[left];
  }
  const middle = Math.floor((left + right) / 2);
  const leftSum = maxSubarrayPartitioner(array, left, middle);
  const rightSum = maxSubarrayPartitioner(array, middle, right);
  const crossSum = crossSubarray(array, left, middle, right);
  return Math.max(crossSum, leftSum, rightSum);
}

function maxSubarraydivideAndConquer(array) {
  return maxSubarrayPartitioner(array, 0, array.length);
}

console.log(maxSubarraydivideAndConquer([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
