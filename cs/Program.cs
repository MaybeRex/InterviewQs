using System;

namespace cs
{
    class Program
    {
        static void Main(string[] args)
        {
            var logs = new string[] { "88 99 200", "88 99 566", "78 98 455", "96 88 333", "44 55 244", "88", "", "99 90" };
            ProcessLogs.Solution(logs, 2);
        }
    }
}
