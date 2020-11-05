using System;
using System.Linq;
/*
Console.WriteLine(StringToInteger.Solution("1234 lol ok"));
Console.WriteLine(StringToInteger.Solution("-1234 wow"));
Console.WriteLine(StringToInteger.Solution("yooo +1234"));
Console.WriteLine(StringToInteger.Solution("+999999999999999999999999999"));
Console.WriteLine(StringToInteger.Solution("-999999999999999999999999999"));
Console.WriteLine(StringToInteger.Solution("   -42"));
Console.WriteLine(StringToInteger.Solution("3.124"));
*/

namespace cs
{
    public class StringToInteger
    {
        public static int Solution(string str)
        {
            if (string.IsNullOrEmpty(str) || string.IsNullOrWhiteSpace(str))
            {
                return 0;
            }
            
            var whiteList = new string[] { "+", "-" };
            str = str.Trim();
            str = str.Split(" ")[0].Trim();
            var firstChar = str[0].ToString();
            var invalid = false;

            try
            {
                int.Parse(firstChar);
            }
            catch (Exception e)
            {
                invalid = true;
            }

            if (!whiteList.Contains(firstChar) && invalid)
            {
                return 0;
            }

            if (firstChar == "-")
            {
                try
                {
                    return (int)float.Parse(str);
                }
                catch (Exception e)
                {
                    return int.MinValue;
                }
            }

            try
            {
                return (int)float.Parse(str);
            }
            catch (Exception e)
            {
                return int.MaxValue;
            }
        }
    }
}

// -234
// 123
// hehe ok 123;