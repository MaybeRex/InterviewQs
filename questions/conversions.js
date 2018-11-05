/*
Implement a class that inputs a file of units conversions and also a file that asks units to convert
and export a file with the answer
conversion input
  [[A, B, 3],
  [B, C, 5]]
convert in question
  A, C
ouput
  15
 */

class Conversions {
  static generateConversionMap(conversionList) {
    const ans = {};
    for (let i = 0; i < conversionList.length; i += 1) {
      const first = conversionList[i][0];
      const second = conversionList[i][1];
      const conversion = conversionList[i][2];

      ans[first] = { ...ans[first], [second]: conversion };
      ans[second] = { ...ans[second], [first]: 1 / conversion };
    }

    return { ...ans };
  }

  static search(conversionMap, currentLetter, endingPoint, visited = [], count = 1) {
    visited.push(currentLetter);

    if (currentLetter === endingPoint) {
      return count;
    }

    const answers = [];

    const keys = Object.keys(conversionMap[currentLetter]);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = conversionMap[currentLetter][key];
      if (visited.includes(key)) {
        continue;
      }

      visited.push(key);
      answers.push(Conversions.search(conversionMap, key, endingPoint, visited, count *= value));
    }

    return answers[0];
  }
}

const convert = (conversionList, startingPoint, endingPoint) => {
  const conversionMap = Conversions.generateConversionMap(conversionList);
  return Conversions.search(conversionMap, startingPoint, endingPoint);
};

console.log(convert(
  [
    ['A', 'B', 3],
    ['B', 'C', 5],
  ],
  'A',
  'C',
) === 15);

console.log(convert(
  [
    ['B', 'C', 5],
    ['A', 'B', 3],
    ['A', 'F', 5],
    ['X', 'Y', 20],
    ['C', 'D', (1 / 15)],
  ],
  'A',
  'D',
) === 1);
