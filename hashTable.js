class HashTable {
  constructor() {
    this.valueArray = [];
  }

  add(key, value) {
    if (typeof key !== 'string') {
      return new Error('Key must be a string!');
    }

    const index = this.generateNumberFromString(key);
    this.valueArray[index] = value;
  }

  remove(key) {
    if (typeof key !== 'string') {
      return new Error('Key must be a string!');
    }

    this.valueArray[this.generateNumberFromString(key)] = undefined;
  }

  get(key) {
    if (typeof key !== 'string') {
      return new Error('Key must be a string!');
    }

    return this.valueArray[this.generateNumberFromString(key)];
  }

  generateNumberFromString(str) {
    let index = 0;

    for(let i = 0; i < str.length; i++) {
      index += str[i].charCodeAt();
    }

    return index;
  }
}
