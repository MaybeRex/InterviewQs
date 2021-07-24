/*
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully
(left and right) justified.
You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible.
If the number of spaces on a line do not divide evenly between words,
the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified becase it contains only one word.

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
*/

const fullJustify = (words, maxWidth) => {
  const ans = [];

  let count = 0;
  let current = [];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const { length } = word;

    const paddingLength = 1;

    if (!current.length) {
      current.push(word);
      count = length;
      continue;
    }

    if ((count + length + paddingLength) > maxWidth) {
      ans.push(current);

      current = [word];
      count = length;
      continue;
    }

    count += paddingLength + length;
    current.push(word);
  }

  ans.push(current);

  const strAns = [];

  for (let i = 0; i < ans.length; i += 1) {
    const spacesAvailable = maxWidth - ans[i].join('').length - 1;
    const wordCount = ans[i].length - 1;

    // special case for last one, and lonely ones
    if ((i === ans.length - 1) || ans[i].length === 1) {
      const finalStr = ans[i].join(' ');
      const finalSpaces = new Array(maxWidth - finalStr.length).join(' ');
      strAns.push(`${finalStr}${finalSpaces}`);
      continue;
    }

    const spaceArray = [];
    for (let j = 0; j < wordCount; j += 1) {
      spaceArray.push('');
    }

    let spaceCount = spacesAvailable;
    let j = 0;
    while (spaceCount >= 0) {
      spaceArray[j % spaceArray.length] += ' ';
      j += 1;
      spaceCount -= 1;
    }

    strAns[i] = ans[i][0];
    for (let k = 1; k < ans[i].length; k += 1) {
      strAns[i] += `${spaceArray[k - 1]}${ans[i][k]}`;
    }
  }

  return strAns;
};

console.log(fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16));
console.log(fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16));
console.log(fullJustify(['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain', 'to', 'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do'], 20));
