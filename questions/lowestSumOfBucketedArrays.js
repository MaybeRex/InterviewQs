const generateCommaLocations = (emptySpaceCount, bucketCount) => {
  const whole = [];
  const emptySpaceArray = [];

  for (let i = 0; i < emptySpaceCount; i += 1) {
    const num = (i * 2) + 1;
    emptySpaceArray.push(num);
  }
  while (emptySpaceArray.length) {
    if (emptySpaceArray.length === bucketCount) {
      whole.push([...emptySpaceArray]);
      break;
    }

    const head = bucketCount - 1;
    const sub = emptySpaceArray.slice(0, head);
    for (let i = head; i < emptySpaceArray.length; i += 1) {
      whole.push([...sub, emptySpaceArray[i]]);
    }

    emptySpaceArray.shift();
  }

  return whole;
};

const generateCommaLists = (spacedList, commaLocations) => {
  const commaLists = commaLocations.map((commaLocationMap) => {
    const spacedListCopy = [...spacedList];
    for (let i = 0; i < commaLocationMap.length; i += 1) {
      const commaLocationIndex = commaLocationMap[i];
      spacedListCopy[commaLocationIndex] = ',';
    }

    return spacedListCopy.filter(item => item != null);
  });

  return commaLists;
};

const generateSumList = commaLists => commaLists.map((commaList) => {
  let tempArr = [];
  let sum = 0;
  for (let i = 0; i < commaList.length; i += 1) {
    const item = commaList[i];
    if (item === ',') {
      sum += Math.max(...tempArr);
      tempArr = [];
      continue;
    }
    tempArr.push(item);
  }
  sum += Math.max(...tempArr);
  return sum;
});

const lowestSumOfBucketedArrays = (list, bucketCount) => {
  const { length } = list;
  const emptySpaces = length - 1;

  const spacedList = [];

  for (let i = 0; i < length; i += 1) {
    if (i === length - 1) {
      spacedList.push(list[i]);
      break;
    }

    spacedList.push(list[i]);
    spacedList.push(null);
  }

  const commaLocations = generateCommaLocations(emptySpaces, bucketCount);
  const commaLists = generateCommaLists(spacedList, commaLocations);
  const sumList = generateSumList(commaLists);
  console.log(commaLists);
  return sumList;
};

console.log(lowestSumOfBucketedArrays([1, 5, 3, 2, 10], 3));
console.log(lowestSumOfBucketedArrays([1, 5, 3, 2, 10], 2));
