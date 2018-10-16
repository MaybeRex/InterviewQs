const isValid = (str) => {
  const types = {
    curly: 0,
    paren: 0,
    bracket: 0,
  };

  const closeTypes = ')]}';
  const nextClose = [];

  const openCloseMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i += 1) {
    const item = str[i];

    // deals with the total sum of ()[]{}
    switch (item) {
      case ')': {
        types.paren -= 1;
        break;
      }
      case '(': {
        types.paren += 1;
        break;
      }
      case ']': {
        types.bracket -= 1;
        break;
      }
      case '[': {
        types.bracket += 1;
        break;
      }
      case '}': {
        types.curly -= 1;
        break;
      }
      case '{': {
        types.curly += 1;
        break;
      }
      default:
        return false;
    }

    // deals w/ the open-close tally ([)]
    if (closeTypes.includes(item)) {
      if (!nextClose.length) {
        return false;
      }

      if (nextClose.pop() !== item) {
        return false;
      }

      continue;
    }

    nextClose.push(openCloseMap[item]);
  }

  const hasZeroCount = Object.values(types).reduce((accum, next) => accum + next, 0) === 0;
  const hasAllClosed = nextClose.length === 0;

  return hasZeroCount && hasAllClosed;
};

console.log(isValid('[]()[]') === true);
console.log(isValid('(]') === false);
console.log(isValid('([)]') === false);
console.log(isValid('([)') === false);
