/*
  Given an array of integers, determine whether or not there exist two elements
  in the array (at different positions) whose sum is equal to some target value.
  Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false
 */

class Solution {
  static containSum(list, sum) {
    if(!Array.isArray(list)) {
      return new Error('Needs an Array as a first param');
    }

    if(typeof sum !== 'number') {
      return new Error('Needs a number as a second param');
    }

    const hashT = {};

    for(let i = 0; i < list.length; i++) {
      if(hashT[`${sum = list[i]}`] !== undefined) {
        return true;
      }

      hashT[list[i].toString()] = list[i];
    }

    return false;
  }
}

console.log(Solution.containSum([5, 4, 2, 4], 8));
console.log(Solution.containSum([5, 1, 2, 4], 8));
