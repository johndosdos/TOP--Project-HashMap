// @ts-check

//On this assignment, only the string data type are handled.

class HashMap {
  constructor() {
    this.hash_array = Array.from({ length: 5 }, function (value, _) {
      return (value = 0);
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

const sample_hash_map = new HashMap();
sample_hash_map.hash("mouse");
