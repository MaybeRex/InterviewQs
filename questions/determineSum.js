/*
  Given an array of integers, determine whether or not there exist two elements
  in the array (at different positions) whose sum is equal to some target value.
  Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false
 */

class Solution {
  static containsSum(list, sum) {
    if(!Array.isArray(list)) {
      return new Error('Needs an Array as a first param');
    }

    if(typeof sum !== 'number') {
      return new Error('Needs a number as a second param');
    }

    for(let i = 0; i < list.length; i++) {
      for(let j = (i + 1); j < list.length; j++) {
        if (list[i] + list[j] === sum) {
          return true;
        }
      }
    }

    return false;
  }
}
