class HashMap {
  constructor() {
    this.loadFactor = 0.8;
    this.capacity = 16;
  }
}

/* 
  LIMITATIONS SNIPPET:
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } 
*/
