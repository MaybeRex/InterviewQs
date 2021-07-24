/*
Part 1:
We are in Tokyo out drinking, and Aman has drunk so much he's going to pass out.
We need to bring him back to the hotel using the train system. Aman has N units of time before he throws up.
Every train journey takes 1 unit of time. Can he get back to the hotel before throwing up?

Input: cities, start, end, N
Output: Y or N

Cities: A map of {start: [end cities]}

Example:
Input: cities: [A: [B, C], B: [C], C: [D]], start: A, end: D, N: 1
Output: No
Input: Same as above, but N: 2
Output: Yes

NOTE: Cycles are allowed in the train map, e.g:
Input: cities: [A: [B, C], B: [A]], start: A, end: C, N: 1
Output: Yes

There is a part 2 if you get done with this.

EDIT: every city's value is an array now
*/


const search = (citiesMap, currentCity, end, hours, visited = {}) => {
  if (hours === 0) {
    return false;
  }

  const destinations = citiesMap[currentCity];

  if (destinations.includes(end)) {
    return true;
  }

  if (visited[currentCity]) {
    return false;
  }
  visited[currentCity] = true;

  for (let i = 0; i < destinations.length; i += 1) {
    const city = destinations[i];
    const found = search(citiesMap, city, end, hours - 1, { ...visited });

    if (found) {
      return true;
    }
  }

  return false;
};

const searchBFS = (citiesMap, currentCity, end, hours) => {
  const queue = [];
  const visited = {};
  queue.push({ city: currentCity, level: 0 });
  while (queue.length) {
    const { city, level } = queue.shift();
    const newLevel = level + 1;

    if (!citiesMap[city]) {
      continue;
    }

    for (let i = 0; i < citiesMap[city].length; i += 1) {
      const newCity = citiesMap[city][i];
      if (end === newCity && newLevel <= hours) {
        return true;
      }

      if (visited[newCity]) {
        continue;
      }

      visited[newCity] = true;

      queue.push({ city: newCity, level: newLevel });
    }
  }

  return false;
};

/*
Part 2.
Aman feels better when he drinks water. At some cities (train stops), water is available,
which takes no time to drink and resets his "sickness level" back to N. Given another new input,
an array of "water cities" waterCities:[], calculate whether Aman can now make it back to the hotel.

Example (only one, sue me, I'm lazy):
Cities: [A: [B], B: [C, D], C: [E], D: [E], E: [F]]
Water: [C]
Start: A
End: F
N: 2
Output: Yes
If water: [],
Output: No
*/

const searchBFS2 = (citiesMap, refresh, currentCity, end, hours) => {
  const queue = [];
  const refreshMap = {};

  for (let i = 0; i < refresh.length; i += 1) {
    refreshMap[refresh[i]] = true;
  }

  let countingHours = hours + 1; // + 1 because of the initial 0 -> 1
  let currentLevel = 0;

  queue.push({ city: currentCity, level: 0 });
  while (queue.length) {
    // current ones, moved the logic inside here
    const { city, level } = queue.shift();

    if (level > currentLevel) {
      currentLevel += 1;
      countingHours -= 1;
    }

    if (refreshMap[city]) {
      countingHours = hours;
    }

    if (end === city) {
      return true;
    }

    if (countingHours <= 0) {
      return false;
    }

    // upcoming ones
    const newLevel = level + 1;
    if (!citiesMap[city]) {
      continue;
    }

    for (let i = 0; i < citiesMap[city].length; i += 1) {
      const newCity = citiesMap[city][i];
      queue.push({ city: newCity, level: newLevel });
    }
  }

  return false;
};

console.log(searchBFS2(
  {
    A: ['B', 'D'],
    B: ['C'],
    C: ['F'],
  },
  ['D'],
  'A',
  'F',
  2,
));

// console.log(searchBFS2(
//   {
//     A: ['B', 'C'],
//     B: ['C'],
//     C: ['D'],
//   },
//   [],
//   'A',
//   'D',
//   1,
// ));
//
// console.log(searchBFS2(
//   {
//     A: ['B', 'C'],
//     B: ['C'],
//     C: ['D'],
//   },
//   [],
//   'A',
//   'D',
//   2,
// ));
//
// console.log(searchBFS2(
//   {
//     A: ['B', 'C'],
//     B: ['A'],
//   },
//   [],
//   'A',
//   'C',
//   1,
// ));
//
// console.log(searchBFS2(
//   {
//     A: ['B'],
//     B: ['C', 'D'],
//     C: ['E'],
//     E: ['F'],
//   },
//   ['C'],
//   'A',
//   'F',
//   2,
// ));
//
// console.log(searchBFS2(
//   {
//     A: ['B'],
//     B: ['C', 'D'],
//     C: ['E'],
//     E: ['F'],
//   },
//   [],
//   'A',
//   'F',
//   2,
// ));

