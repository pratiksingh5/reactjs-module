
# 🚀 JavaScript Practice – Promises, Async/Await & API Calls

---

## 🔹 Promises

### Question 1 – Basic Promise Creation
```js
// Create a Promise that resolves after 2 seconds with the value "Done!"
```

### Question 2 – Promise Chaining
```js
// Create a promise that resolves with a number and then chain two .then() calls
// First adds 5, second multiplies by 2
```

### Question 3 – Error Handling with .catch()
```js
// Create a promise that immediately rejects with an error message
// Handle it with .catch() and log the error
```

### Question 4 – Using fetch() with Promises
```js
// Use fetch to call https://fakestoreapi.com/products
// Use .then() to parse JSON and log product titles
```

---

## 🔹 Async / Await

### Question 5 – Convert Promise to Async/Await
```js
// Re-write the following code using async/await:
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Question 6 – Handling errors with try/catch
```js
// Use async/await and fetch https://fakestoreapi.com/products/invalid
// Handle 404 or other errors using try/catch
```

### Question 7 – Async Function that Returns a Value
```js
// Write an async function that returns the string "Completed!" after 1 second using setTimeout and Promise
```

### Question 8 – Await Multiple API Calls
```js
// Call these two endpoints using async/await:
// - https://fakestoreapi.com/products/1
// - https://fakestoreapi.com/products/2
// Log both titles in the console or in the HTML Page
```

---

## 🔁 Mixing Promises & Async/Await

### Question 9 – Return a Promise inside async
```js
// Create an async function that awaits a Promise which resolves after 1 second with "Hello World"
```

### Question 10 – Using await inside a loop (basic)
```js
// Loop through IDs [1, 2, 3] and fetch each product one by one using await
// Log their titles
```

---

