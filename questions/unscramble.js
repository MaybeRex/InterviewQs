const isInScramble = (word, scrambleMap, ans) => {
  for (let i = 0; i < word.length; i += 1) {
    const letter = word[i];
    if (scrambleMap[letter] > 0) {
      scrambleMap[letter] -= 1;
      continue;
    }

    return false;
  }

  ans.push(word);
  return true;
};

const unscramble = (dictionary, scrambleMap, ans) => {
  let foundSomething = false;
  for (let i = 0; i < dictionary.length; i += 1) {
    const word = dictionary[i];
    const foundInnerSomething = isInScramble(word, scrambleMap, ans);

    if (!foundSomething && foundInnerSomething) {
      foundSomething = true;
    }
  }

  return foundSomething;
};

const unscrambleBacktrack = (dictionary, str) => {
  dictionary = dictionary.sort((a, b) => b.length - a.length);

  const ans = [];
  const scrambleMap = {};

  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];

    if (!scrambleMap[letter]) {
      scrambleMap[letter] = 1;
      continue;
    }

    scrambleMap[letter] += 1;
  }

  let isValid = true;

  while (isValid) {
    isValid = unscramble(dictionary, scrambleMap, ans);
  }

  return ans.join(' ');
};

console.log(unscrambleBacktrack(['a', 'he', 'the', 'many'], 'ahehetyman'));
console.log(unscrambleBacktrack(['a', 'he'], 'aheheman'));
console.log(unscrambleBacktrack(['b', 'he', 'hea'], 'bhea'));
console.log(unscrambleBacktrack(['a', 'he', 'the', 'many'], 'aahehetmany'));
