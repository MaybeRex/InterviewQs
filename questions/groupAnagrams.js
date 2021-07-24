/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]
*/

const groupAnagrams = (strs) => {
  const map = {};

  for (let i = 0; i < strs.length; i += 1) {
    const sortedItem = strs[i].split('').sort().join('');
    const item = strs[i];

    if (!map[sortedItem]) {
      map[sortedItem] = [item];
      continue;
    }

    map[sortedItem].push(item);
  }

  return Object.values(map);
};

console.log(groupAnagrams(
  ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
));

console.log(groupAnagrams(
  [''],
));

console.log(groupAnagrams(
  ['a'],
));
