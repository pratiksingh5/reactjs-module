## Javascript Interview Questions - Set 8

1. What is async/await in javascript?

<details>
  <summary>Click to expand!</summary>

Async/await is a syntax feature in JavaScript that allows you to write asynchronous code in a more synchronous way. It uses the `async` and `await` keywords to define asynchronous functions.

In JavaScript async function returns a Promise. The await keyword pauses the execution of the async function until the awaited promise resolves. After await rest of async function gets in microtask queue. This allows for more readable and manageable asynchronous code.

Here's an example of using async/await to fetch data from an API:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.freeapi.app/v1/jokes/random');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData()
  .then(() => console.log('Data fetched'))
  .catch(error => console.error(error));
```

In this example, the `fetchData` function is defined as an asynchronous function using the `async` keyword. The `await` keyword is used to wait for the `fetch` function to complete before moving on to the next line of code. All code after the `await` keyword, rest of the function is executed in the microtask queue.
</details>

2. Discuss callback and callback hell in javascript.
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

Callback hell is a problem in JavaScript where functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior.

Here's an example of callback hell:

```javascript

fetchRandomJoke(joke) =>{
  console.log(joke);
  translateJoke(joke, translation) =>{
    console.log(translation);
    writeToFile(translation, file) =>{
      console.log('Joke written to file');
      sendEmail(translation, email) =>{
        console.log('Joke sent to email');
      }
    }
  }
}

//better way to do it
const fetchRandomJoke = async (joke) => {
  const joke = await fetchJoke();
  const translation = await translateJoke(joke);
  await writeToFile(translation, file);
  await sendEmail(translation, email);
}
```

In this example, the `fetchRandomJoke` function is called with a callback function that is passed to the `translateJoke` function. The `translateJoke` function is called with a callback function that is passed to the `writeToFile` function. The `writeToFile` function is called with a callback function that is passed to the `sendEmail` function.

The problem with this code is that the callback functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior. To avoid callback hell, it's recommended to use async/await or promises to handle asynchronous operations.
  

</details>