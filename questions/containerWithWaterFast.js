const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left <= right) {
    const distance = right - left;
    const limitingHeight = Math.min(height[left], height[right]);
    const currentArea = distance * limitingHeight;

    if (currentArea > max) {
      max = currentArea;
    }

    if (height[right] > height[left]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([0, 0, 0, 3, 0, 4, 0, 0, 0]));
