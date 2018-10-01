def isMatch(text, pattern):
    if not pattern:
        return not text

    # if text is defined and pattern[0] is equal to text[0] or '.'
    # otherwise first is false
    first_match = bool(text) and pattern[0] == text[0] or pattern[0] =='.'

    # is patteen.length === 2 and pattern[1] === '*'
    if len(pattern) >= 2 and pattern[1] == '*':
        return (isMatch(text, pattern[2:]) or first_match and isMatch(text[1:], pattern))
    else:
        return first_match and isMatch(text[1:], pattern[1:])

print isMatch('aaa', 'a*') == True
# print isMatch('aaa', 'a*a') == True
# print isMatch('aaa', 'ab*a*c*a') == True
# print isMatch('a', 'ab*a') == False

# console.log(isMatch('a', 'ab*') === true);
# console.log(isMatch('aaa', 'a*a') === true);
# console.log(isMatch('aaa', 'ab*a*c*a') === true);
# console.log(isMatch('a', 'ab*a') === false);
# console.log(isMatch('mississippi', 'mis*is*ip*.') === true);
# console.log(isMatch('aaaaacccbbbbbx', 'c*a*cccb*x') === true);
