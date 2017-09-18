/*

  '.' Matches any single character.
  '*' Matches zero or more of the preceding element.

  The matching should cover the entire input string (not partial).

  The function prototype should be:
  bool isMatch(const char *s, const char *p)

  Some examples:
  isMatch("aa","a") → false
  isMatch("aa","aa") → true
  isMatch("aaa","aa") → false
  isMatch("aa", "a*") → true
  isMatch("aa", ".*") → true
  isMatch("ab", ".*") → true
  isMatch("aab", "c*a*b") → true

 */

function isMatch(str, rule) {
  // step 0: error checking

  if(str === '') {
    return false;
  }

  if(rule === '') {
    return false;
  }

  if(typeof str !== 'string' || typeof rule !== 'string') {
    return false;
  }

  const rulesToMatch = [];
  const specialChars = ['*']

  // Step 1, find the rules
  let currentRule = '';
  for(let i = 0; i < rule.length; i += 2) {
    const current = rule[i];
    let next = rule[i + 1];

    // only a single match
    // or the end
    if(!next) {
      currentRule += current;
      rulesToMatch.push(currentRule);
      currentRule = '';
      continue;
    }

    // handle two regular chars
    if((!specialChars.includes(current) && !specialChars.includes(next))) {
      currentRule += `${current}${next}`;
    }

    // custom specific match
    if(specialChars.includes(next)) {
      currentRule += `${current}${next}`;
      rulesToMatch.push(currentRule);
      currentRule = '';
    }
  }

  if(currentRule !== '') {
    rulesToMatch.push(currentRule);
  }

  console.log(rulesToMatch);
  // step 2, unse the found rules and see if there are any matches
  let reverseSearch = false;
  for(let i = 0; i < rulesToMatch.length; i++) {
    const applyingRule = rulesToMatch[i];

    // any match rules
    if(applyingRule === '.*') {
      if(rulesToMatch[ i + 1]) {
        reverseSearch = true;
        continue;
      }
      return true;
    }

    // general match rules
    if(applyingRule[1] === '*') {
      const targetLetter = applyingRule[0];
      const indexOfTarget = str.indexOf(targetLetter);
      // check if the letter exists inside, and if all preceeding chars are in it too
      const prefixStr = str.substring(0, indexOfTarget);
      const remainingStr = prefixStr.replace(targetLetter, '');

      if(indexOfTarget !== -1 && remainingStr === '') {
        return true;
      }
    }

    // reverseSearch of 'char*';
    if(reverseSearch && str.includes(applyingRule)) {
      const split = str.split(applyingRule);
      if(!split[1]) {
        return true;
      }
    }


    //exact matches;
    if(applyingRule === str){
      return true;
    }

    if(str.length === applyingRule.length) {
      let completeMatch = true;

      for(let j = 0; j < str.length; j++) {
        if(str[j] === applyingRule[j] || applyingRule[j] === '.'){
          continue;
        }
        completeMatch = false;
      }

      return completeMatch;
    }
  }

  return false;
}

// console.log(isMatch('abcd', 'd*'));
// console.log(isMatch('aa', 'a*'));
// console.log(isMatch('abc', '.*c'));
// console.log(isMatch('ab', '.*c'));
// console.log(isMatch('aaa', 'aaa'));
// console.log(isMatch('aaa', 'a.a'));
console.log(isMatch('aaa', 'ab*ac*a')); // TODO rewrite this, assumptions were wrong
