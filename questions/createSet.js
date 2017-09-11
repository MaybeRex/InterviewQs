/*
  Implement a set-like data structure that supports Insert, Remove, and GetRandomElement efficiently.
  Example: If you insert the elements 1, 3, 6, 8 and remove 6, the structure should contain [1, 3, 8].
  Now, GetRandom should return one of 1, 3 or 8 with equal probability.
*/

/*
  Consideration:
  Sets do not allow repeats
  Sets do not follow a particular order
  Random num generation will be up to the language being used (JS in this case)
*/

class Set {
  constructor() {
    this.set = [];
  }

  insert(item) {
    if(typeof item !== 'number') {
      return new Error('Input must be a number or an Array');
    }

    const indexOfNum = this.findIndex(item);

    if(indexOfNum !== false) {
      return this.set[indexOfNum];
    }

    return this.set.push(item);
  }

  remove(num) {
    if(typeof num !== 'number') {
      return new Error('First param musr be a number');
    }

    const indexOfNum = this.findIndex(num);

    if(indexOfNum === false) {
      return num;
    }

    return this.set.splice(indexOfNum, 1);
  }

  getRandomElement() {
    const setLength = this.set.length;

    if(setLength === 0) {
      return false;
    }

    if(setLength === 1) {
      return this.set[0];
    }

    const randomIndex = Math.round(Math.random() * 100) % setLength;
    return this.set[randomIndex];
  }

  findIndex(num) {
    for(let i = 0; i < this.set.length; i++) {
      if(num === this.set[i]) {
        return i;
      }
    }

    return false;
  }
}
