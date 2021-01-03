const isPresent = false;
const magic = 66.6;
const hello = "world";

// Classes
const regexp = new RegExp("ab+c");

// Array
const array: Array<number> = [1, 2, 3];

// Sets
const set: Set<number> = new Set([123]);

// First in first out collection
// T is any non declared type - declared at instantiation
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

// Queue of type number
const queue: Queue<number> = new Queue();
