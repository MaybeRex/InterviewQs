/*

  Given an integer, convert it to a roman numeral.

  Input is guaranteed to be within the range from 1 to 3999.

 */

/*

  Assumptions:
    numbers will be between 1 - 3999
 */

const lookup = [
  {
    symbol: 'M',
    value: 1000,
  },
  {
    symbol: 'CM',
    value: 900,
  },
  {
    symbol: 'D',
    value: 500,
  },
  {
    symbol: 'CD',
    value: 400,
  },
  {
    symbol: 'C',
    value: 100,
  },
  {
    symbol: 'XC',
    value: 90,
  },
  {
    symbol: 'L',
    value: 50,
  },
  {
    symbol: 'XL',
    value: 40,
  },
  {
    symbol: 'X',
    value: 10,
  },
  {
    symbol: 'IX',
    value: 9,
  },
  {
    symbol: 'V',
    value: 5,
  },
  {
    symbol: 'IV',
    value: 4,
  },
  {
    symbol: 'I',
    value: 1,
  },
];

function intToRoman(num) {
  let ans = '';

  for (let i = 0; i < lookup.length; i += 1) {
    const lookupVal = lookup[i].value;
    while (num >= lookupVal) {
      ans += lookup[i].symbol;
      num -= lookupVal;
    }
  }

  return ans;
}

console.log(intToRoman(10) === 'X');
console.log(intToRoman(58) === 'LVIII');
console.log(intToRoman(1994) === 'MCMXCIV');
console.log(intToRoman(1991));
