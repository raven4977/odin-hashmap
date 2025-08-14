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
    this.buckets = new Array(this.capacity).fill(null);
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
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append(key, value);
      this.size++;
      return;
    }
    let current = this.buckets[index].head;
    while (current) {
      if (key === current.key) {
        current.value = value;
        return;
      }
      current = current.nextNode;
    }
    this.buckets[index].append(key, value);
    this.size++;
  }

  get(key) {
    const index = this.hash(key);

    const buckets = this.buckets;
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.buckets[index]) {
      let current = this.buckets[index].head;
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.nextNode;
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);

    const buckets = this.buckets;
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.buckets[index]) {
      let current = this.buckets[index].head;
      while (current) {
        if (current.key === key) {
          return true;
        }
        current = current.nextNode;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const buckets = this.buckets;
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const arrayValue = this.buckets[index];
    if (arrayValue) {
      let current = arrayValue.head;
      if (this.buckets[index].head.key === key) {
        this.buckets[index].head = this.buckets[index].head.nextNode;
        this.size--;
        return;
      }
      while (current) {
        if (current.nextNode && current.nextNode.key === key) {
          current.nextNode = current.nextNode.nextNode;
          this.size--;
          return;
        }
        current = current.nextNode;
      }
    }
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }
  values() {
    let values = [];
    this.buckets.forEach((bucket) => {
      if (bucket && bucket !== null) {
        let current = bucket.head;
        while (current) {
          values.push(current.value);
          current = current.nextNode;
        }
      }
    });
    return values;
  }
  entries() {
    let array = [];
    this.buckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.head;
        while (current) {
          array.push([current.key, current.value]);
          current = current.nextNode;
        }
      }
    });
    return array;
  }
}
