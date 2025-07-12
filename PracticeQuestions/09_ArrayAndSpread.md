## 🔹 Array.slice()

### Question 1
```js
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// Get the first three elements using slice
```

### Question 2
```js
const numbers = [1, 2, 3, 4, 5];
// Use slice to get [3, 4] from the array
```
---

## 🔹 Array.splice()

### Question 5
```js
const arr = [10, 20, 30, 40, 50];
// Use splice to remove 2 elements starting from index 2
```

### Question 6
```js
const names = ['Alice', 'Bob', 'Charlie'];
// Replace 'Bob' with 'David' using splice
```

---

## 🔹 Spread Operator (`...`)

### Question 7
```js
const a = [1, 2, 3];
const b = [4, 5];
// Merge arrays a and b into a new array using spread operator
```

### Question 8
```js
const obj1 = { x: 1 };
const obj2 = { y: 2 };
// Combine both objects into a new object using spread
```

---

## 🔹 Rest Operator (`...`)

### Question 10
```js
function sum(...args) {
  // Return the sum of all arguments
}
console.log(sum(1, 2, 3)); // Output: 6
```

### Question 11
```js
function firstAndRest(a, ...rest) {
  console.log("First:", a);
  console.log("Rest:", rest);
}
firstAndRest(10, 20, 30, 40);
```

### Question 12
```js
const { a, ...rest } = { a: 1, b: 2, c: 3 };
// Log values of 'a' and 'rest'
```

---