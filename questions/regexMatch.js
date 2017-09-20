// /*
//  NOTE couldn;t solve it in time idk
//   '.' Matches any single character.
//   '*' Matches zero or more of the preceding element.
//
//   The matching should cover the entire input string (not partial).
//
//   The function prototype should be:
//   bool isMatch(const char *s, const char *p)
//
//   Some examples:
//   isMatch("aa","a") → false
//   isMatch("aa","aa") → true
//   isMatch("aaa","aa") → false
//   isMatch("aa", "a*") → true
//   isMatch("aa", ".*") → true
//   isMatch("ab", ".*") → true
//   isMatch("aab", "c*a*b") → true
//
//  */
//
// function isMatch(str, rule) {
//   // Step 1: Error check
//
//   if(str === '' || rule === '') {
//     return false;
//   }
//
//   if(typeof str !== 'string' || typeof str !== 'string') {
//     return false;
//   }
//
//   // Step 2: Parse out rules
//
//   const rules = [];
//   let currentRuleStr = '';
//   for(let i = 0; i < rule.length; i++) {
//     currentRuleStr += rule[i];
//     if(rule[i] === '*') {
//       rules.push(currentRuleStr);
//       currentRuleStr = '';
//     }
//   }
//
//   if(currentRuleStr !== '') {
//     rules.push(currentRuleStr);
//   }
//
//   // Step 3: Verify rules with input string
//
//   str = str.split('');
//   for(let i = rules.length - 1; i >= 0; i--) {
//     const currentRule = rules[i].split('');
//
//     let activeRule = '';
//     let currentRuleIsEffective = true
//     while(currentRuleIsEffective) {
//       activeRule += currentRule.pop();
//
//       if(activeRule === '*') {
//         continue;
//       }
//
//       if(activeRule[1] === '*') {
//         const next = rules[i - 1]
//
//         while(str[str.length - 1] === activeRule[0]) {
//           str.pop();
//         }
//         activeRule = '';
//         continue;
//       }
//
//       while(activeRule)
//     }
//
//   }
//
//
//   if(str.length) {
//     return false;
//   }
//
//   return true;
// }
//
// // console.log(isMatch('abcd', 'd*'), );
// // console.log(isMatch('aa', 'a*'));
// // console.log(isMatch('abc', '.*c'), true);
// // console.log(isMatch('ab', '.*c'), false);
// // console.log(isMatch('aaa', 'aaa'), true);
// // console.log(isMatch('aaa', 'a.a'), true);
// // console.log(isMatch('aaa', 'ab*ac*a')); // TODO rewrite this, assumptions were wrong
