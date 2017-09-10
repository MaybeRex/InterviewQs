class HashTable {
  constructor() {
    this.valueArray = [];
    this.maxLength = 701; // NOTE best to use a prime number
  }

  add(key, value) {
    const index = this.getIndex(key);

    if(this.valueArray[index] !== undefined) {
      const exists = this.valueArray[index].reduce((doesExist, entry) => {
        if(entry[0] === key) {
          return true;
        }
      }, false);

      if(exists) {
        return new Error('Already exists!');
      }

      return this.valueArray.push([key, value]);
    }

    return this.valueArray[index] = [[key, value]];
  }

  remove(key) {
    const index = this.getIndex(key);

    if (!this.valueArray[index]) {
      return undefined;
    }

    for(let i = 0; i < this.valueArray[index].length; i++) {
      if(key === this.valueArray[index][i][0]) {
        this.valueArray[index][i] = undefined;

        this.valueArray[index] = this.valueArray[index].splice();

        if(this.valueArray[index].length === 0) {
          this.valueArray[index] = undefined;
        }
        return true;
      }
    }
  }

  get(key) {
    const index = this.getIndex(key);

    if(this.valueArray[index] === undefined) {
      return undefined;
    }

    const value = this.valueArray[index].filter((entry) => {
      if(!entry) {
        return false;
      }
      return entry[0] === key;
    });

    if(value.length === 0) {
      return undefined;
    }

    return value[0][1];
  }

  getIndex(str) {
    let index = 0;

    for(let i = 0; i < str.length; i++) {
      index += (str[i].charCodeAt() - 65) % 701 ;
    }

    return index;
  }
}

const ht = new HashTable();

ht.add('m', 3);
ht.add('a', 'hello there!');
ht.remove('m');
console.log(ht.get('hello'));
console.log(ht.valueArray);
