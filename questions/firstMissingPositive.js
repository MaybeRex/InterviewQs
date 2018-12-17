const firstMissingPositive = (nums) => {
  let current;
  let indexForCurrent;
  for (let i = 0; i < nums.length;) {
    if (nums[i] < 0) {
      nums[i] = 0;
      i += 1;
    } else if (nums[i] > nums.length) {
      i += 1;
    }
    current = nums[i];
    indexForCurrent = current - 1;
    while (nums[i] !== nums[indexForCurrent]) {
      if (current > 0 && current <= nums.length) {
        const next = nums[indexForCurrent];
        nums[indexForCurrent] = current;
        nums[i] = next;
        current = nums[i];
        indexForCurrent = current - 1;
      } else {
        nums[i] = 0;
        i += 1;
        current = nums[i];
        indexForCurrent = current - 1;
      }
    }
    i += 1;
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
