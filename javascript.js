class LinkedList {
  constructor() {
    this.head = null;
  }
  append(key, value) {
    if (!this.head) {
      this.head = new Node(key, value);
      return;
    }
    let current = this.head;
    while (current && current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = new Node(key, value);
  }
}

class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

class HashMap {
  constructor() {
    this.loadFactor = 0.8;
    this.size = 0;
    this.buckets = 16;
    this.hashmap = [];
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.hashmap[index]) {
      this.hashmap[index] = new LinkedList();
      this.hashmap[index].append(key, value);
      return;
    }
    let current = this.hashmap[index].head;
    while (current) {
      if (key === current.key) {
        current.value = value;
        return;
      }
      current = current.nextNode;
    }
    this.hashmap[index].append(key, value);
  }

  get(key) {
    const index = this.hash(key);

    const buckets = this.buckets;
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.hashmap[index]) {
      let current = this.hashmap[index].head;
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.nextNode;
      }
    }
    return null;
  }
}

const map = new HashMap();
// console.log(map.hash("Cameron"));
map.set("Cameron", "Brown");
// map.set("Cameron", "Second");
map.set("Amerons", "Third");
// map.set("Cameron", "Jarrod");
// map.set("Coolio", "Gangsta");
console.log(map.get("Cameron"));

console.log(map);

/* 
  LIMITATIONS SNIPPET:
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } 
*/
