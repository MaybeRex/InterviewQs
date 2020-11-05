using System;

namespace cs
{
    public class MergeSort
    {
        public static int[] Sort(int[] nums)
        {
            if (nums.Length == 1)
            {
                return nums;
            }

            var middle = (int)(nums.Length / 2);
            var isEven = nums.Length % 2 == 0;
            var left = new ArraySegment<int>(nums, 0, middle).ToArray();
            var right = new ArraySegment<int>(nums, middle, isEven ? middle : middle + 1).ToArray();

            return Merge(Sort(left), Sort(right));
        }

        public static int[] Merge(int[] left, int[] right)
        {
            var merged = new int[left.Length + right.Length];
            var mergedIndex = 0;

            var leftIndex = 0;
            var rightIndex = 0;

            while ((leftIndex < left.Length) && (rightIndex < right.Length))
            {
                if (left[leftIndex] < right[rightIndex])
                {
                    merged[mergedIndex] = left[leftIndex];
                    mergedIndex += 1;
                    leftIndex += 1;
                    continue;
                }

                merged[mergedIndex] = right[rightIndex];
                mergedIndex += 1;
                rightIndex += 1;
            }

            while (leftIndex < left.Length)
            {
                merged[mergedIndex] = left[leftIndex];
                mergedIndex += 1;
                leftIndex += 1;
            }

            while (rightIndex < right.Length)
            {
                merged[mergedIndex] = right[rightIndex];
                mergedIndex += 1;
                rightIndex += 1;
            }

            return merged;
        } 
    }
}