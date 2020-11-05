using System;
using System.Linq;

namespace cs
{
    public class ReverseInteger
    {
        public static int Solution(int num)
        {
            if (num == 0)
            {
                return num;
            }

            try
            {
                var sign = Math.Sign(num);
                var numStr = string.Join("", Math.Abs(num).ToString().Reverse());
                return sign * int.Parse(numStr);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}