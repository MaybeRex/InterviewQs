const strStr = (haystack, needle) => {
  if (haystack === needle) {
    return 0;
  }

  if (needle.length > haystack.length) {
    return -1;
  }

  if (needle === '') {
    return 0;
  }

  let offset = 0;
  const needleLengh = needle.length;
  const haystackLength = haystack.length;
  for (let i = 0; i < haystack.length; i += 1) {
    // avoids super long stuff
    if (needleLengh > (haystackLength - i)) {
      return -1;
    }

    if (haystack[i] === needle[0]) {
      while (haystack[i + offset] === needle[offset]) {
        offset += 1;
        if (offset === needleLengh) {
          return i;
        }
      }
    }

    offset = 0;
  }

  return -1;
};

console.log(strStr('hello', 'll') === 2);
console.log(strStr('aaaaa', 'baa') === -1);
console.log(strStr('aaabaa', 'baa') === 3);
console.log(strStr('mississippi', 'issip') === 4);
