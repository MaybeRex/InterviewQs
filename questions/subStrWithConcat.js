const findSubstring = (str, words) => {
  if (!words.length) {
    return [];
  }

  if (!str.length) {
    return [];
  }

  const ans = [];
  const wordLength = words[0].length;
  const maxSrtMatch = words.length * wordLength;
  const wordMap = words.reduce((accum, word) => {
    accum[word] = true;
    return accum;
  }, {});
  const sortedWords = words.sort();

  // under immediateMatch, we avoid back to back matches

  let index = 0;
  while (str.length) {
    const match = str.slice(0, wordLength);

    if (wordMap[match]) {
      let totalMatch = str.slice(0, maxSrtMatch);
      let possibleMatch = [];
      for (let i = 0; i < words.length; i += 1) {
        possibleMatch.push(totalMatch.slice(0, wordLength));
        totalMatch = totalMatch.slice(wordLength);
      }

      possibleMatch = possibleMatch.sort();

      if (possibleMatch.toString('') === sortedWords.toString()) {
        ans.push(index);
      }
    }

    index += 1;
    str = str.slice(1);
  }

  return ans;
};

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']));
console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']));
console.log(findSubstring('aaaaaaaa', ['aa', 'aa', 'aa']));
