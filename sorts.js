class Sorts {
  /*MERGE*/

  /**
   * This sort has two parts, first the list must be broken up into individual arrays
   * Second, the arrays must be joined together and "merged" to form a larger sorted array
   * @param  {Array} list  un-ordered lisr
   * @return {Array}       sorted list
   */
  mergeSort(list) {
    // if the list is of length 1, it is alredy sorted!
    if (list.length === 1) {
      return list
    }

    const middle = Math.round(list.length / 2);
    const left = list.slice(0, middle);
    const right = list.slice(middle, list.length);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  /**
   * Merges sorted lists into a biggest sorted list
   * @param  {Array} left  ordered lisr
   * @param  {Array} right ordered lisr
   * @return {Array}       joined ordered list
   */
  merge(left, right) {
    const sortedList = [];

    while(left.length && right.length) {
      if (left[0] > right[0]) {
        sortedList.push(right.shift());
        continue;
      }

      sortedList.push(left.shift());
    }

    if(left.length) {
      sortedList.push(...left);
    }

    if(right.length) {
      sortedList.push(...right);
    }

    return sortedList;
  }

  /*QUICK*/

  /**
   * This algo is nlog(n) just like the merge but it does not do well on lists that are already sorted
   * @param  {Array} list list
   * @return {Array}      sorted list
   */
  quickSort(list, left, right) {
    left = left || 0;
    right = right || list.length - 1;

    const pivot = this.partition(list, left, right);

    if(left < pivot - 1) {
      this.quickSort(list, left, pivot - 1);
    }

    if(right > pivot) {
      this.quickSort(list, pivot, right)
    }

    return list;
  }

  partition(list, left, right) {
    const pivot = Math.floor((left + right) / 2);
    while(left <= right) {
      while(list[left] < list[pivot]) {
        left++;
      }

      while(list[right] > list[pivot]) {
        right--;
      }

      if(left <= right) {
        this.swap(list, left, right);
        left++;
        right--;
      }
    }

    return left;
  }

  /**
   * Simple swap of two value in a list
   */
  swap(list, firstI, secondI) {
    const temp = list[firstI];
    list[firstI] = list[secondI];
    list[secondI] = temp;
    return list;
  }
}

const sortAlgos = new Sorts()
console.log(sortAlgos.mergeSort([9,4,5,7,3,2,4,7,4,3,3, 0, -99, 45, 100, 101, 34, -08, 9]));
console.log(sortAlgos.quickSort([9,4,5,7,3,2,4,7,4,3,3, 0, -99, 45, 100, 101, 34, -08, 9]));
