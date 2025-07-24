# Javascript Interview Questions - Set 5

1. What is the difference between Slice and Splice?

<details>
  <summary>Click to expand!</summary>

**Slice**

- **Purpose**: Used to create a new array by extracting a portion of an existing array.
- **Syntax**: `array.slice(startIndex, endIndex)`
  - `startIndex`: The index to start slicing (inclusive).
  - `endIndex`: The index to end slicing (exclusive).
- **Returns**: A new array without modifying the original array.

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const citrus = fruits.slice(1, 3); // ['banana', 'cherry']
console.log(citrus); // Outputs: ['banana', 'cherry']
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry', 'date']
```

**Splice**

- **Purpose**: Used to add or remove elements from an array.
- **Syntax**: `array.splice(startIndex, deleteCount, item1, item2, ...)`
  - `startIndex`: The index at which to start modifying the array.
  - `deleteCount`: The number of elements to remove.
  - `item1, item2, ...`: Items to add to the array.
- **Returns**: The removed elements as an array, modifying the original array.

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const removed = fruits.splice(1, 2, 'kiwi', 'mango'); // Removes 2 items starting at index 1 and adds 'kiwi' and 'mango'
console.log(fruits); // Outputs: ['apple', 'kiwi', 'mango', 'date']
console.log(removed); // Outputs: ['banana', 'cherry']
```

</details>


2. What are rest and spread operator in javascript?

<details>
  <summary>Click to expand!</summary>

Rest and spread operator are two important features in JavaScript that allow you to work with arrays and objects in a more concise and readable way.

The rest operator allows you to take an array or an object as an argument and use it in a function call.

The spread operator allows you to expand an array or an object into individual elements.

Here's an example of using the rest and spread operator in JavaScript:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5]
```

In this example, the `sum` function takes an array of numbers as an argument using the rest operator. 
The spread operator is used to expand the array into individual elements, which are then passed to the `reduce` function.


</details>


3. **What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?**

<details>
  <summary>Click to expand!</summary>

- **`Object.keys()`**: Returns an array of **keys** (property names) of an object.
  - **Example**:
    ```javascript
    const obj = { a: 1, b: 2 };
    console.log(Object.keys(obj)); // ["a", "b"]
    ```

- **`Object.values()`**: Returns an array of **values** of an object.
  - **Example**:
    ```javascript
    const obj = { a: 1, b: 2 };
    console.log(Object.values(obj)); // [1, 2]
    ```

- **`Object.entries()`**: Returns an array of **key-value pairs** as arrays.
  - **Example**:
    ```javascript
    const obj = { a: 1, b: 2 };
    console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
    ```

</details>