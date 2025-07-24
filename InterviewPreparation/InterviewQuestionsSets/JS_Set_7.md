## Javascript Interview Questions - Set 7

<details>
  <summary><strong>1. Is javascript single threaded or multi-threaded? </strong></summary>

JavaScript is a single-threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next. This is what allows JavaScript to be non-blocking and use async operations.
However, Javascript also has asynchronous behavior. This is what allows us to use setTimeout, AJAX, and promises. These functions are handled by the browser, not by JavaScript itself. This is what allows JavaScript to be non-blocking for main thread operations.

</details>

  <details>
   <summary><strong>2. What is event loop in javascript? </strong></summary>
  Make sure that you ask interviewer to allow you to draw the diagram on the whiteboard. Drawing the diagram will help you to explain the event loop in a better way and make sure to draw queue and stack as well.

JavaScript is a single-threaded language, meaning it can only execute one task at a time within a single call stack. However, despite this single-threaded nature, JavaScript is capable of performing asynchronous, non-blocking operations thanks to the event loop.

The event loop is a fundamental mechanism in JavaScript that handles asynchronous operations. When a task, such as an HTTP request or a DOM event, is initiated, it is handed off to browser APIs.

The event loop continuously monitors the call stack and the task
queues. If the call stack is empty, the event loop first checks the
microtask queue for any pending tasks and executes them.

Once the microtask queue is empty, the event loop then checks the macrotask queue and moves tasks from there to the call stack for execution. This process ensures that high-priority tasks (microtasks) are executed before lower-priority tasks (macrotasks).

</details>

<details>
<summary><strong>3. Discuss Promise and Promise chaining in javascript. </strong></summary>

Promises are a way to handle asynchronous operations in JavaScript. They allow you to write code that can be executed asynchronously, without blocking the main thread. Promises are created using the `Promise` constructor, and can be chained together using the `then` method.

Promises have three states: `pending`, `fulfilled`, and `rejected`. When a promise is pending, it means that the asynchronous operation is still in progress. When a promise is fulfilled, it means that the asynchronous operation has completed successfully. When a promise is rejected, it means that the asynchronous operation has failed.

Promises can be chained together using the `then` method. The `then` method takes two arguments: a success callback and an error callback. The success callback is called when the promise is fulfilled, and the error callback is called when the promise is rejected.

Here's an example of using promises to fetch data from an API:

```javascript
fetch("https://api.freeapi.app/v1/jokes/random")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

</details>


<details>
  <summary><strong>4. What is the difference between syntax <code>Promise.resolve</code> / <code>Promise.reject</code> and <code>new Promise</code> in JavaScript?</strong></summary>

##### 🔹 `Promise.resolve()` and `Promise.reject()`

These are **shortcut methods** to create promises that are immediately resolved or rejected.

##### ✅ Example:
```js
const resolved = Promise.resolve("Done!");
resolved.then(console.log); // Output: Done!

const rejected = Promise.reject("Error!");
rejected.catch(console.error); // Output: Error!
```

- Use these when the result is already known or available.
- Helpful for mocking async behavior or setting default return values.

---

##### 🔹 `new Promise()`

This is used to create a promise with **custom asynchronous logic**.

##### ✅ Example:
```js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
};

fetchData().then(console.log); // Output after 1 sec: Data fetched
```

- Use this when you want to wrap or control real async operations like `setTimeout`, `fetch`, file reading, etc.
- Gives full access to when and how to resolve or reject.

---

##### 🧠 Summary

- Use `Promise.resolve()` and `Promise.reject()` when you need a **quick resolved/rejected promise**.
- Use `new Promise()` when you need to perform **asynchronous operations** and resolve manually.

</details>
