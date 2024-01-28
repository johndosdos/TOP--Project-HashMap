// @ts-check

//On this assignment, only the string data type are handled.

class HashMap {
  constructor() {
    this.hashArray = Array.from({ length: 5 }, function (value, _) {
      return (value = undefined);
    });
  }

  /**
   * @param {string} key
   */
  hash(key) {}

  set(key, value) {}

  get(key) {}

  has(key) {}

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

const sampleHashMap = new HashMap();
sampleHashMap.hash("mouse");
