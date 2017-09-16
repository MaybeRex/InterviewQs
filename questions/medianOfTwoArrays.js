/*
  There are two sorted arrays nums1 and nums2 of size m and n respectively.

  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

  Example 1:
    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0

  Example 2:
    nums1 = [1, 2]
    nums2 = [3, 4]

    The median is (2 + 3)/2 = 2.5
*/

function findMedianSortedArrays(nums1, nums2) {
  const mergedList = merge(nums1, nums2);
  const len = mergedList.length;

  // average the two middle numbers
  if(len % 2 === 0) {
    const first = mergedList[len / 2];
    const second = mergedList[(len / 2) - 1];
    return (first + second) / 2;
  }

  // return the middle numbers
  if(len % 2 === 1) {
    const middle = Math.floor(len / 2);
    return mergedList[middle];
  }

  return mergedList
}

function merge(list1, list2) {
  const answer = [];
  while(list1.length && list2.length) {
    if(list1[0] > list2[0]) {
      answer.push(list2.shift());
      continue;
    }
    answer.push(list1.shift());
  }

  answer.push(...list1);
  answer.push(...list2);

  return answer;
}

console.log(findMedianSortedArrays([1,2], [3,4]));
