# Javascript Interview Questions - Set 2


1. Is JavaScript dynamic type or variable type language?

<details>
  <summary>Click to expand!</summary>

JavaScript is a dynamically typed language, meaning variable types can change at runtime instead of being set at compile time.

</details>

2. Explain how javascript engines works?

<details>
  <summary>Click to expand!</summary>

JavaScript engines are programs that execute JavaScript code. They are found in web browsers and other environments that host JavaScript. The most popular JavaScript engines are Google's V8, SpiderMonkey, and JavaScriptCore. These engines are written in C++ and are used to execute JavaScript code.

</details>

3. What is the difference between for-in and for-of?

<details>
  <summary>Click to expand!</summary>

- **`for-in`**:
  - Iterates over the **keys** (properties) of an object or the indices of an array.
  - Used mainly for objects, but works for arrays too.
  - **Example**:
    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    for (let key in obj) {
      console.log(key); // Outputs: a, b, c
    }
    ```

- **`for-of`**:
  - Iterates over the **values** of an iterable object (arrays, strings, maps, etc.).
  - Does not work for plain objects, only for arrays or other iterable structures.
  - **Example**:
    ```javascript
    const arr = [1, 2, 3];
    for (let value of arr) {
      console.log(value); // Outputs: 1, 2, 3
    }
    ```

</details>


4. What are arrow functions in javascript?
  <details>
  <summary>Click to expand!</summary>
  
Arrow functions are a shorthand syntax for writing functions in JavaScript. They provide a more concise and readable way to write functions, especially when using anonymous functions.

Here's an example of an arrow function in JavaScript:

```javascript
const add = (x, y) => x + y;
console.log(add(2, 3)); // Output: 5
```

In this example, the arrow function `add` takes two arguments `x` and `y` and returns their sum. The arrow function is defined using the `=>` operator, which is a shorthand for the `function` keyword.

</details>


5. Wahat is Scope in JavaScript?

<details>
  <summary>Click to expand!</summary>

Scope governs the accessibility of variables in different parts of the code. It determines where a variable can be accessed and where it cannot.

There are three types of scopes:

- **Global Scope**: Variables declared in the global scope can be accessed from anywhere in the code.
- **Local Scope**: Variables declared within a function are only accessible within that function.
- **Block Scope**: Variables declared inside a block (like within curly braces `{}`) are only accessible within that block.