/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = ""
Output: 0 

var one = "abcabcbb";
var two = "bbbbb";
var three = "a";

Console.WriteLine($"{one} {LengthOfLongestSubstring.Solution(one)} 3");
Console.WriteLine($"{two} {LengthOfLongestSubstring.Solution(two)} 1");
Console.WriteLine($"{three} {LengthOfLongestSubstring.Solution(three)} 1");
*/

using System;
using System.Collections.Generic;
using System.Linq;

namespace cs
{
    public class LengthOfLongestSubstring
    {
        public static int Solution(string str)
        {
            str = str.Replace(" ", "-");
            if (str.Length == 0)
            {
                return 0;
            }

            var ansList = new List<string>();
            var letterMap = new List<string>();

            foreach (var letter in str)
            {
                if (letterMap.Contains(letter.ToString()))
                {
                    ansList.Add(String.Join("", letterMap));
                    letterMap = new List<string>();
                }
                
                letterMap.Add(letter.ToString());
            }
            
            ansList.Add(String.Join("", letterMap));

            var maxStr = "";
            var maxLength = 0;

            foreach (var ansStr in ansList)
            {
                if (ansStr.Length > maxLength)
                {
                    maxLength = ansStr.Length;
                    maxStr = ansStr;
                }
            }

            return maxLength;
        }
    }
}