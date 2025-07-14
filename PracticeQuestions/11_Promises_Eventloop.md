
# JavaScript Practice Questions: Event Loop and Promises


### 1. Basic Promise Creation

Create a promise that resolves with the message `"Hello, Promise!"` after 1 second. Log the resolved value to the console.

---

### 2. Promise Chaining

Create a promise that resolves to the number `10`. Chain `.then()` to multiply the number by 2, then subtract 4, and finally log the result.

---

### 3. Error Handling

Create a promise that rejects with an error message `"Something went wrong"`. Catch the error and log it to the console.

---

### 4. Nesting Promises

Create a promise that resolves to `"First"`, and inside its `.then()` handler, return another promise that resolves to `"Second"`. Log both results in sequence.

---

### 5. Return vs. No Return in .then()

What is the output of the following code? Why?

```javascript
Promise.resolve("Initial")
  .then(value => {
    console.log(value);
    "No Return";
  })
  .then(value => {
    console.log("Second then:", value);
  });
```

---

### 6. Catching Errors in a Chain

What will be printed in the following code? Explain the flow.

```javascript
Promise.resolve()
  .then(() => {
    throw new Error("Oops!");
  })
  .then(() => {
    console.log("This won't run");
  })
  .catch(err => {
    console.log("Caught:", err.message);
  });
```

---
