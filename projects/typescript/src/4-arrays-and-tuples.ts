// Array
let array: number[] = [1, 2, 3];

// Usage
array = [1];

array = [1, 2, 3, 4, 5];

// array = ["Hello"]; - generates an error, as have to be the same type!

// Declare fixed length array - tuple

let tuple: [number, number] = [0, 0];

// 2 is fine
tuple = [1, 5];

// 1 is compile error
tuple = [1];

// 3 is compile error
tuple = [1, 2, 3];

// mixed type is error - must be number, number
tuple = ["elite", 1337];
