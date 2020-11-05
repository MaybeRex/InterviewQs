using System;
using System.Collections.Generic;

namespace cs
{
    public class FindMedianSortedArrays
    {
        public static double Solution(int[] first, int[] second)
        {
            var mergedList = Merge(first, second);

            var count = mergedList.Count;
            var middle = count / 2;

            if (count % 2 == 0)
            {
                
                return ((double)mergedList[middle] + (double)mergedList[middle - 1]) / 2;
            }

            return (double)mergedList[middle];
        }

        public static List<int> Merge(int[] first, int[] second)
        {
            var merged = new List<int>();
            var firstIndex = 0;
            var secondIndex = 0;

            while (firstIndex < first.Length && secondIndex < second.Length)
            {
                if (first[firstIndex] >= second[secondIndex])
                {
                    merged.Add(second[secondIndex]);
                    secondIndex += 1;
                    continue;
                }
                
                merged.Add(first[firstIndex]);
                firstIndex += 1;
            }

            while (firstIndex < first.Length)
            {
                merged.Add(first[firstIndex]);
                firstIndex += 1; 
            }

            while (secondIndex < second.Length)
            {
                merged.Add(second[secondIndex]);
                secondIndex += 1;
            }

            return merged;
        }
    }
}