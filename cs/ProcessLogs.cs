using System;
using System.Collections.Generic;

namespace cs
{
    public class ProcessLogs
    {
        public static string[] Solution(string[] logs, int threshold)
        {
            var map = new Dictionary<string, int>();
            var ans = new List<string>();
            foreach (var entry in logs)
            {
                if (string.IsNullOrEmpty(entry))
                {
                    continue;
                }
                var entryParams = entry.Split(" ");
                var firstUid = entryParams[0];
                var secondUid = entryParams[1];

                if (map.ContainsKey(firstUid))
                {
                    map[firstUid] += 1;
                }
                else
                {
                    map[firstUid] = 1;
                }
                
                if (map.ContainsKey(secondUid))
                {
                    map[secondUid] += 1;
                }
                else
                {
                    map[secondUid] = 1;
                }
            }

            foreach (KeyValuePair<string, int> mapEntry in map)
            {
                if (mapEntry.Value >= threshold)
                {
                    ans.Add(mapEntry.Key);
                }
            }

            var yes = ans.ToArray();
            return ans.ToArray();
        }
    }
}