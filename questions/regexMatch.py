def isMatch(text, pattern):
        memo = {}
        def dp(i, j):
            if (i, j) not in memo:
                if j == len(pattern):
                    ans = i == len(text)
                else:
                    first_match = i < len(text) and pattern[j] in {text[i], '.'}
                    if j+1 < len(pattern) and pattern[j+1] == '*':
                        ans = dp(i, j+2) or first_match and dp(i+1, j)
                    else:
                        ans = first_match and dp(i+1, j+1)

                memo[i, j] = ans
            return memo[i, j]

        return dp(0, 0)

print isMatch('b', '.*c') == True
# print isMatch('aaa', 'a*') == True
# print isMatch('aaa', 'a*a') == True
# print isMatch('aaa', 'ab*a*c*a') == True
# print isMatch('a', 'ab*a') == False

# console.log(isMatch('a', 'ab*') === true);
# console.log(isMatch('aaa', 'a*a') === true);
# console.log(isMatch('aaa', 'ab*a*c*a') === true);
# console.log(isMatch('a', 'ab*a') === false);
# console.log(isMatch('mississippi', 'mis*is*ip*.') === true);
# console.log(isMatch('aaaaacccbbbbbx', 'c*a*cccb*x') === true);
