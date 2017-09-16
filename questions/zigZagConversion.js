/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows:

  string convert(string text, int nRows);
  convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

/**
 * Conversion from zig-zag
 * @param  {String} string  Zig-Zag
 * @param  {Number} rows    Number of rows
 * @return {String}        Compounded String
 */
function convertFromZigZag(str) {
  const rows = str.split('\n');
  const firstRow = rows[0];

  let answer = '';

  for(let i = 0; i < firstRow.length; i++) {
    let subStr = '';
    for(let j = 0; j < rows.length; j++) {
      let char = rows[j][i];

      if(char === undefined) {
        continue;
      }

      subStr += char;
    }
    subStr = subStr.trim();
    answer += subStr;
  }

  return(answer);
}

// console.log(convertFromZigZag('P   A   H   N\nA P L S I I G\nY   I   R'));

/**
 * Convers to zig zag
 * @param  {String} str  string to be zigged
 * @param  {Number} rows rows to be zagged
 * @return {String}      zig-zagged string
 */
function convert(str, rows) { // I don't get it
  if(str == null) {
    return '';
  }

  if(rows == 1) {
    return str;
  }

  var n = rows * 2 - 2;
  var array = [];

  // initialize thw rows here
  for(var k = 0 ; k < rows; k++){
    array.push('');
  }

  for(let i = 0; i < str.length; i++){
    let lineNumber = i % n;
    if(lineNumber < rows){
      array[lineNumber] += str[i];
    } else {
      array[ 2 * rows - lineNumber -2] += str[i];
    }
  }

  return array.join('');
};

console.log(convert("PAYPALISHIRING", 3)); // shoud return PAHNAPLSIIGYIR
