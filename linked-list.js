export class LinkedList {
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

export class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}
