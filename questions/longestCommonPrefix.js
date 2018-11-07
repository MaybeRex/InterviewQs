const longestCommonPrefix = (list) => {
  if (!list || !list.length || list.length <= 0) {
    return '';
  }

  if (list.length === 1) {
    return list[0];
  }

  const first = list.shift();
  let longest = '';

  for (let i = 0; i < first.length; i += 1) {
    const currentLetter = first[i];
    let match = true;
    for (let j = 0; j < list.length; j += 1) {
      const word = list[j];

      if (word[i] !== currentLetter) {
        match = false;
        break;
      }
    }

    if (!match) {
      break;
    }

    longest += currentLetter;
  }

  return longest;
};

console.log(longestCommonPrefix([]) === '');
console.log(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) === '');
