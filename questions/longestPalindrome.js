// Using manacher's ouuuuu
const longestPalindrome = (str) => {
  if (str.length < 2) {
    return str;
  }

  // hash up the array to account for middle spot palindromes
  const workingArr = ['$', '#', ...str.split('').join('#').split(''), '#', '@'];

  const score = new Array(workingArr.length);
  score.fill(0);

  // init variables
  let center = 0;
  let rightBoundry = 0;
  let leftBoundry = 0;
  let maxWord = str[0];
  let maxWordLength = 1;

  for (let i = 1; i < (workingArr.length - 1); i += 1) {
    // defined by manacher's theorem on this
    const mirrorIndex = (2 * center) - i;

    // give the mirror's score if found
    // defined by manache's theorem
    if (i < rightBoundry) {
      score[i] = Math.min(rightBoundry - i, score[mirrorIndex]);
    }

    // search outwards for palindrome, add 1 point for every space that goes out
    while (
      (workingArr[i + (1 + score[i])] === workingArr[i - (1 + score[i])])
      && workingArr[i + (1 + score[i])] !== undefined
    ) {
      score[i] += 1;
    }

    // if a larger palindrome is found, or i is beyond boundy, update the center and boundry
    if ((i + score[i]) > rightBoundry) {
      // check final boundried and update word
      const word = workingArr.slice(leftBoundry, rightBoundry).join('').replace(/#/g, '');
      // console.log(word);
      if (word.length >= maxWordLength) {
        maxWord = word;
        maxWordLength = word.length;
      }

      center = i;
      leftBoundry = i - score[i];
      rightBoundry = i + score[i];
    }
  }

  const lastWord = workingArr.slice(leftBoundry, rightBoundry).join('').replace(/#/g, '');
  return lastWord.length > maxWordLength ? lastWord : maxWord;
};

console.log(longestPalindrome('babadada'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('bb'));
// console.log(longestPalindrome('abababa'));
// console.log(longestPalindrome('baba'));
// console.log(longestPalindrome('eracecart'));
// console.log(longestPalindrome('anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg'));
