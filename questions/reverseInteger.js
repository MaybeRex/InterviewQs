/*


  Reverse digits of an integer.

  Example1: x = 123, return 321
  Example2: x = -123, return -321

  click to show spoilers.

  Note:
  The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

 */


// NOTE below is a better answer
// NOTE the trick to this, is that x % 10 gets the last digit from a number
// and x = parseInt(x/10) removes it
/**
 * Reverses an integer
 * Steps:
 *  1. Add room to a number by multiplying 10, ex. 3 * 10 = 30
 *  2. Get the last integer from the wanted number by stripping off its value as stated above
 *  3. remove the last int from the original number and continue
 * @param  {[type]} x [description]
 * @return {[type]}   [description]
 */
function reverseInt(x){
  var reverse = 0;
  while(x){
    reverse = reverse * 10 + x % 10;
    x = parseInt(x/10);
  }
  return reverse;
}

console.log(reverseInt(-1234));
