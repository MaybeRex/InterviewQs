/*
Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s.
You can return them in any order.
A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and
cannot have leading zeros. For example,
"0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and
"192.168@1.1" are invalid IP addresses.

Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Input: s = "0000"
Output: ["0.0.0.0"]

Input: s = "1111"
Output: ["1.1.1.1"]

Input: s = "010010"
Output: ["0.10.0.10","0.100.1.0"]

Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
*/

const validate = (currentIp) => {
  for (let i = 0; i < currentIp.length; i += 1) {
    const num = currentIp[i];

    if (!num.length) {
      return false;
    }

    if (num[0] === '0' && num.length > 1) {
      return false;
    }

    if (Number.parseInt(num, 10) > 255) {
      return false;
    }
  }

  return true;
};

const fill = (solutionIndex, str, solutions) => {
  const strArr = str.split('');
  const ans = [];
  for (let i = 0; i < solutionIndex.length; i += 1) {
    const deleteCount = solutionIndex[i];
    ans.push(strArr.splice(0, deleteCount).join(''));
  }
  ans.push(strArr.join(''));
  solutions.push(ans);
};

const backtrack = (str, keys, solutions, currentIndex = [[], [], []]) => {
  for (let i = 1; i <= 3; i += 1) {
    keys[currentIndex] = i;
    if (!keys.includes(0)) {
      solutions.push([...keys]);
    }

    if (currentIndex < 2) {
      backtrack(str, [...keys], solutions, currentIndex + 1);
    }
  }
};

const restoreIpAddresses = (str) => {
  if (str.length > 12 || str.length < 4) {
    return [];
  }

  if (isNaN(parseInt(str, 10))) {
    return [];
  }

  const keys = [0, 0, 0];
  const solutionIndexes = [];
  const solutions = [];
  const filteredSolutions = [];
  const current = 0;
  backtrack(str, keys, solutionIndexes, current);

  for (let i = 0; i < solutionIndexes.length; i += 1) {
    fill(solutionIndexes[i], str, solutions);
  }

  for (let i = 0; i < solutions.length; i += 1) {
    if (!validate(solutions[i])) {
      continue;
    }

    filteredSolutions.push(solutions[i].join('.'));
  }

  return filteredSolutions;
};

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('101023'));
console.log(restoreIpAddresses('1111'));
console.log(restoreIpAddresses('010010'));

