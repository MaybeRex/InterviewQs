const getSections = (num) => {
  const sectionData = [];
  const numStr = num.toString();
  let prev = num[0];

  sectionData.push({
    count: 1,
    num: prev,
  });

  for (let i = 1; i < numStr.length; i += 1) {
    const value = numStr[i];
    if (value === prev) {
      sectionData[sectionData.length - 1].count += 1;
      continue;
    }

    prev = value;

    sectionData.push({
      count: 1,
      num: prev,
    });
  }

  return sectionData;
};

const printSectionData = (sectionList) => {
  let ansStr = '';
  for (let i = 0; i < sectionList.length; i += 1) {
    const current = sectionList[i];
    ansStr += `${current.count}${current.num}`;
  }

  return ansStr;
};

const countAndSay = (num, current = '1', count = 1) => {
  if (num === 1) {
    return '1';
  }

  const sectionList = getSections(current);
  current = printSectionData(sectionList);

  count += 1;
  if (Number(count) === Number(num)) {
    return current;
  }

  return countAndSay(num, current, count);
};

console.log(countAndSay(1) === '1');
console.log(countAndSay(2) === '11');
console.log(countAndSay(3) === '21');
console.log(countAndSay(4) === '1211');
