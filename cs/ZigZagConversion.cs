using System;
using System.Collections.Generic;

/*
Console.WriteLine($"{ZigZagConversion.Solution("PAYPALISHIRING", 4)} PINALSIGYAHRPI");
Console.WriteLine($"{ZigZagConversion.Solution("PAYPALISHIRING", 3)} PAHNAPLSIIGYIR"); 
*/
namespace cs
{
    public class ZigZagConversion
    {
        public static string Solution(string str, int rowCount)
        {
            if (rowCount == 1)
            {
                return str;
            }
            var evenIndex = 0;
            var oddIndex = rowCount - 2;
            var isOdd = false;

            var ansList = new List<string>[rowCount];
            
            for (var i = 0; i < ansList.Length; i += 1)
            {
                ansList[i] = new List<string>();
            }

            for (var strIndex = 0; strIndex < str.Length; strIndex += 1)
            {
                var letter = str[strIndex].ToString();
                var col = evenIndex % rowCount;
                
                if (col == 0 && strIndex != 0 && !isOdd)
                {
                    isOdd = true;
                    oddIndex = rowCount - 2;
                }
                
                if (oddIndex == 0 && isOdd)
                {
                    isOdd = false;
                    oddIndex = rowCount - 2;
                }

                if (!isOdd)
                {
                    ansList[col].Add(letter);
                    evenIndex += 1;
                }
                else
                {
                    ansList[oddIndex].Add(letter);
                    oddIndex -= 1; 
                }
            }

            var ansStr = "";

            foreach (var subList in ansList)
            {
                foreach (var strChr in subList)
                {
                    ansStr += strChr;
                }
            }

            return ansStr;
        }
    }
}