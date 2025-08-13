class HashMap {
  constructor() {
    this.loadFactor = 0.8;
    this.capacity = 16;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode % this.capacity;
  }
}

const map = new HashMap();
console.log(map.hash("Cameron"));

/* 
  LIMITATIONS SNIPPET:
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } 
*/
