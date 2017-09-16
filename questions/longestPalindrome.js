/*
  Given a string s, find the longest palindromic substring in s.
  You may assume that the maximum length of s is 1000.

  Example:

    Input: "babad"

    Output: "bab"

    Note: "aba" is also a valid answer.

  Example:

    Input: "cbbd"

    Output: "bb"
 */

// My (shitty) solution
function findLongestPalindrome(str) {
  if(str.length === 1) {
    return str;
  }

  const cache = {};
  const prospects = [];
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    if(cache[char] !== undefined) {
      cache[char].count++;
      cache[char].indexes.push(i);
      continue;
    }

    cache[char] = {
      count: 1,
      indexes: [i]
    };
  }

  let maxPal = str[0];

  for(key in cache) {
    const possiblePalindrome = cache[key];
    const palCount = possiblePalindrome.count;

    if(palCount < 2) {
      continue;
    }

    for(let i = 0; i < palCount; i++) {
      for(let j = (i + 1); j < possiblePalindrome.indexes.length; j++) {
        const firstIndex = possiblePalindrome.indexes[i]
        const secondIndex = possiblePalindrome.indexes[j];
        const pal = str.substring(firstIndex, secondIndex + 1);

        if(isPalindrome(pal)) {
          if(pal.length > maxPal.length) {
            maxPal = pal;
          }
        }
      }
    }
  }

  return maxPal;
}

function isPalindrome(str) {
  let reversedStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr === str;
}

console.log(findLongestPalindrome('anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg'));

// optimum solution


/*

var longestPalindrome = function(string) {
  var length = string.length;
  var result = "";

  var centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      //expand in each direction.
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  };

  for (var i = 0; i < length - 1; i++) {
    var oddPal = centeredPalindrome(i, i + 1);

    var evenPal = centeredPalindrome(i, i);

    if (oddPal.length > 1)
      console.log("oddPal: " + oddPal);
    if (evenPal.length > 1)
      console.log("evenPal: " + evenPal);

    if (oddPal.length > result.length)
      result = oddPal;
    if (evenPal.length > result.length)
      result = evenPal;
  }
  return result;
}

 */
