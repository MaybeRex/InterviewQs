/*
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.

Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.


Input: path = "/a/./b/../../c/"
Output: "/c"
*/

const simplifyPath = (path) => {
  const directions = [];

  path = path.split('/').filter(element => element !== '');

  for (let i = 0; i < path.length; i += 1) {
    const element = path[i];
    if (element === '.') {
      continue;
    }

    if (element === '..') {
      directions.pop();
      continue;
    }

    directions.push(element);
  }

  return `/${directions.join('/')}`;
};

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/a/./b/../../c/'));
