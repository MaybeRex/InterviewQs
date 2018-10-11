class MergeSort {
  static merge(left, right) {
    const ans = [];

    while (left.length && right.length) {
      if (left[0] > right[0]) {
        ans.push(right.shift());
        continue;
      }

      ans.push(left.shift());
    }

    ans.push(...left);
    ans.push(...right);

    return ans;
  }

  static sort(list) {
    if (list.length === 1) {
      return list;
    }

    const middle = Math.floor(list.length / 2);
    const left = list.slice(0, middle);
    const right = list.slice(middle);

    return MergeSort.merge(MergeSort.sort(left), MergeSort.sort(right));
  }
}

module.exports = MergeSort;
