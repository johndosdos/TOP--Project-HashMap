// @ts-check

//On this assignment, only the string data type is handled.

class HashMap {
  constructor() {
    /**
     * @type {Array<{key: string, value: string}>}
     */
    this.hash_array = Array.from({ length: 13 }, function (value, _) {
      return (value = { key: "", value: "" });
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
   * @param {string} key
   * @param {string} value
   * @param {number} index1
   * @param {number} index2   */
  #double_hash(key, value, index1, index2) {
    let i = 0;
    let final_index = index1;

    while (this.hash_array[final_index].key !== "") {
      final_index = (index1 + i * index2) % this.hash_array.length;
      i++;
    }

    this.hash_array[final_index] = {
      key,
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

    this.#double_hash(key, value, HASH_CODE_INDEX1, HASH_CODE_INDEX2);
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
sample_hash_map.set("apple", "red");
sample_hash_map.set("banana", "yellow");
sample_hash_map.set("orange", "orange");
sample_hash_map.set("grape", "purple");
sample_hash_map.set("watermelon", "green");
sample_hash_map.set("strawberry", "red");
sample_hash_map.set("blueberry", "blue");
sample_hash_map.set("kiwi", "green");
sample_hash_map.set("pineapple", "yellow");
sample_hash_map.set("peach", "orange");

console.log(sample_hash_map.hash_array);
