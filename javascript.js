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
    this.capacity = 16;
    this.hashmap = [];
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const bucket = this.hash(key);
    if (!this.hashmap[bucket]) {
      this.hashmap[bucket] = new LinkedList();
      this.hashmap[bucket].append(key, value);
      return;
    }
    let current = this.hashmap[bucket].head;
    while (current) {
      if (key === current.key) {
        current.value = value;
        return;
      }
      current = current.nextNode;
    }
    this.hashmap[bucket].append(key, value);
  }
}

const map = new HashMap();
console.log(map.hash("Cameron"));
map.set("Cameron", "Brown");
map.set("Cameron", "Second");
map.set("Amerons", "Third");
map.set("Cameron", "Jarrod");
map.set("Coolio", "Gangsta");
console.log(map);

/* 
  LIMITATIONS SNIPPET:
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } 
*/
