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
      hash_code += String(CHAR).charCodeAt(0) * 11;
    }

    return hash_code;
  }

  /**
   * @param {number} hash_code
   * @param {number} index1
   * @param {number} index2
   * @param {string} value
   */
  #double_hash(hash_code, index1, index2, value) {
    let i = 0;
    let final_index = index1;

    while (this.hash_array[final_index].hash_code !== 0) {
      final_index = (index1 + i * index2) % this.hash_array.length;
      i++;
    }

    this.hash_array[final_index] = {
      hash_code,
      value,
    };
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  set(key, value) {
    const hash_code = this.#hash(key);
    const hash_code_index1 = hash_code % this.hash_array.length;
    const hash_code_index2 = 7 - (hash_code % 7);

    this.#double_hash(hash_code, hash_code_index1, hash_code_index2, value);

    console.log({ key, value });
  }

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
