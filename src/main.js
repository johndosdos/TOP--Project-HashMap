// @ts-check

//On this assignment, only the string data type is handled.

class HashMap {
  #prime;
  hash_array;
  load_factor;

  constructor() {
    /**
     * @type {Array<{key: string, value: string}>}
     */
    this.hash_array = Array.from({ length: 13 }, function (value, _) {
      return (value = { key: "", value: "" });
    });
    this.load_factor = 0;

    this.#prime = function () {
      let prime = 0;
      let i = this.hash_array.length;

      while (i--) {
        if (i % 2 !== 0) {
          prime = i;
          break;
        }
      }

      return prime;
    };
  }

  /**
   * @param {number} hash_array_length
   */
  #calc_next_prime(hash_array_length) {
    let prime = 0;
    let i = hash_array_length;

    while (i++) {
      if (i % 2 !== 0) {
        prime = i;
        break;
      }
    }

    return prime;
  }

  /**
   * @param {string} key
   * @returns {number}
   */
  #hash(key) {
    const PREV_PRIME = this.#prime();
    let hash_code = 0;

    if (typeof key !== "string") {
      throw new Error("key is not type string");
    }

    for (let i = 0; i < key.length; i++) {
      // Horner's method
      hash_code +=
        PREV_PRIME * (String(key).charCodeAt(i) + PREV_PRIME * hash_code);
    }

    return hash_code;
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} index1
   * @param {number} index2
   */
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
      const PREV_PRIME = this.#prime();
  /**
   * @param {Array<{key: string, value: string}>} hash_array
   */
  #calc_load_factor(hash_array) {
    const NUM_OF_ELEMENTS = hash_array.filter(function (element) {
      if (element.key) return element;
    }).length;
    const ARRAY_SIZE = hash_array.length;

    return NUM_OF_ELEMENTS / ARRAY_SIZE;
  }

  /**
   * @param {number} load_factor
   */
  #check_load_factor(load_factor) {
    if (load_factor >= 0.75) {
      this.#rehash();
    }
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  set(key, value) {
    const PREV_PRIME = this.#prime();
    const HASH_CODE = this.#hash(key);
    const HASH_CODE_INDEX1 = HASH_CODE % this.hash_array.length;
    const HASH_CODE_INDEX2 = PREV_PRIME - (HASH_CODE % PREV_PRIME);

    this.#double_hash(key, value, HASH_CODE_INDEX1, HASH_CODE_INDEX2);

    this.load_factor = this.#calc_load_factor(this.hash_array);
    this.#check_load_factor(this.load_factor);
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
