/*
Implement string match but w. Backspaces
  abc === ab<f<t<ddd<<<dbc → true
*/

const backspace = '<';

const process = (str) => {
  // reversing makes this super EZ
  // tip from interviewer
  const reversed = str.split('').reverse();

  let deleteCount = 0;
  const cleansed = [];
  for (let i = 0; i < reversed.length; i += 1) {
    const ltr = reversed[i];
    if (ltr === backspace) {
      deleteCount += 1;
      continue;
    }

    if (deleteCount > 0) {
      deleteCount -= 1;
      continue;
    }

    cleansed.push(ltr);
  }

  return cleansed.reverse().toString();
};

const doesMatch = (firstStr, secondStr) => {
  const processedFirst = process(firstStr);
  const processedSecond = process(secondStr);

  return processedFirst === processedSecond;
};


console.log(doesMatch('abc', 'ab<f<t<ddd<<<d<bc'));
console.log(doesMatch('a', 'ab<f<t<ddd<<<d<'));
