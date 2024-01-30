// @ts-check

//On this assignment, only the string data type are handled.

class HashMap {
  constructor() {
    /**
     * @type {Array<{hash_code: number, value: string}>}
     */
    this.hash_array = Array.from({ length: 13 }, function (value, _) {
      return (value = { hash_code: 0, value: "" });
    });
  }

  /**
   * @param {string} key
   * @returns {number}
   */
  #hash(key) {
    let hash_code = 0;

    if (typeof key !== "string") {
      throw new Error("key is not type string");
    }

    for (const CHAR of key) {
      hash_code += String(CHAR).charCodeAt(0) * 13;
    }

    return hash_code;
  }

  /**
   * @param {string} key
   * @param {string} value
   */
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
sample_hash_map.set("car", "toyota");
