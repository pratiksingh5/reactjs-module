# Javascript Interview Questions - Set 3

1. Discuss callback in javascript.
  <details>
  <summary>Click to expand!</summary>
  
  Callback functions are functions that are passed as arguments to other functions and are called when a certain event occurs. They are commonly used in JavaScript to handle asynchronous operations, such as making HTTP requests or reading from a file.

  example:

  ```javascript
  function readFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return callback(err);
      callback(null, data);
    });
  }

  readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  setTimeout(() => {
    console.log('Timeout');
  }, 1000);
  ```  

</details>

2. What is higher order function in javascript?

<details>
  <summary>Click to expand!</summary>

Higher order functions are functions that take other functions as arguments or return functions as results. They are a powerful tool in JavaScript that allow you to write more flexible and reusable code.

Here's an example of a higher order function in JavaScript:

```javascript
function applyTwice(func, arg) {
  return func(func(arg));
}

console.log(applyTwice(Math.sqrt, 16)); // Output: 4
```

</details>

## 3. What is the Difference Between `map()` and `forEach()`?

<details>
  <summary>Click to expand!</summary>
  
### Purpose:
- **`map()`:** Creates and returns a new array by transforming each element of the original array.
- **`forEach()`:** Iterates over an array but does not return a new array. It is used for performing side effects (e.g., logging, modifying external variables).

### Return Value:
- **`map()`:** Returns a new array.
- **`forEach()`:** Returns `undefined`.

### Use Case:
- **`map()`:** When you need a transformed array.
- **`forEach()`:** When you only need to perform an operation on each element without returning anything.

### Example:

```javascript
const numbers = [1, 2, 3, 4];

// Using map
const squares = numbers.map(num => num * num); // [1, 4, 9, 16]

// Using forEach
numbers.forEach(num => console.log(num * num)); // Logs 1, 4, 9, 16
```

### Chaining:
- **`map()`:** Can be chained with other array methods.
- **`forEach()`:** Cannot be chained directly as it returns `undefined`.

### Summary:
- Use `map()` for transformations requiring a new array.
- Use `forEach()` for actions like logging or modifying external variables.

</details>

---

## 4. What is the Difference Between `map` and `filter`?

<details>
  <summary>Click to expand!</summary>
  
### Purpose:
- **`map`:** Transforms each element and returns a new array.
- **`filter`:** Filters elements based on a condition and returns a new array.

### Return Value:
- **`map`:** Same length as the original array.
- **`filter`:** May have fewer elements.

### Example:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.map(num => num * 2);   // [2, 4, 6, 8, 10]
numbers.filter(num => num % 2 === 0); // [2, 4]
```

### When to Use:
- Use `map` for transformations.
- Use `filter` to extract specific elements.

</details>

---