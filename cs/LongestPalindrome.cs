using System;
using System.Collections.Generic;
using System.Linq;

/*
static void Main(string[] args)
{
    Console.WriteLine(LongestPalindrome.Solution("babad"));
    Console.WriteLine(LongestPalindrome.Solution("cbbd"));
    Console.WriteLine(LongestPalindrome.Solution("aaaabbaax"));
    Console.WriteLine(LongestPalindrome.Solution("abc"));
    Console.WriteLine(LongestPalindrome.Solution("ccd"));
}
*/

namespace cs
{
    public class LongestPalindrome
    {
        public static string Solution(string str)
        {
            if (str.Length == 0)
            {
                return str;
            }
            var workingList = new List<string>() { "$", "#" };
            // lol, c# is BS when it comes to this shit
            var transformedStr = string.Join("#",str.ToList().Select(c => c.ToString())).ToList().Select(c => c.ToString());
            
            workingList.AddRange(transformedStr);
            workingList.Add("#");
            workingList.Add("@");
            // ^^ making the Manacher string format

            // Manacher's score array
            var score = new int[workingList.Count];
            var maxScore = 1;
            var maxWord = str[0].ToString();

            for (var i = 0; i < workingList.Count - 1; i+= 1)
            {
                var leftIndex = i - 1;
                var rightIndex = i + 1;

                var isWithinLeft = leftIndex >= 0;
                var isWithinRight = rightIndex < workingList.Count;
                while (isWithinLeft && isWithinRight && workingList[leftIndex] == workingList[rightIndex])
                {
                    score[i] += 1;
                    
                    leftIndex -= 1;
                    rightIndex += 1;
                    
                    isWithinLeft = leftIndex > 0;
                    isWithinRight = rightIndex < workingList.Count - 1;
                }
                
                if (score[i] >= maxScore)
                {
                    maxScore = score[i];
                    maxWord = string.Join("", workingList.GetRange(leftIndex + 1, (rightIndex - leftIndex - 1))).Replace("#", "");
                }
                
            }

            return maxWord;
        }
    }
}
