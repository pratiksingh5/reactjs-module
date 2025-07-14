
# 🧠 JavaScript Guess The Output – Execution Context, Event Loop, Promises

- 🧠 Execution Context
- 🌀 Event Loop
- 📦 Promises 

---

## 🔹 Execution Context

### Question 1
```js
console.log('Start');
function greet() {
  console.log('Hello');
}
greet();
console.log('End');
```

### Question 2
```js
var x = 10;
function print() {
  console.log(x);
  var x = 20;
}
print();
```

### Question 3
```js
let a = 1;
function foo() {
  console.log(a);
}
function bar() {
  let a = 2;
  foo();
}
bar();
```

### Question 4
```js
function test() {
  console.log(a);
  var a = 5;
}
test();
```

### Question 5
```js
var a = 1;
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 2;
  inner();
}
outer();
```

---

## 🔹 Event Loop & Call Stack

### Question 6
```js
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
```

### Question 7
```js
setTimeout(() => console.log('A'), 0);
for(let i = 0; i < 1000000000; i++) {}
console.log('B');
```

### Question 8
```js
console.log('A');
setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 0);
console.log('D');
```



### Question 10
```js
setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);
console.log('Synchronous');
```

---

## 🔹 Promises

### Question 11
```js
const promise = new Promise((resolve, reject) => {
  console.log('Inside Promise');
  resolve(5);
});
promise.then(val => console.log('Resolved with', val));
console.log('Outside Promise');
```

### Question 12
```js
Promise.resolve().then(() => {
  console.log('Then 1');
}).then(() => {
  console.log('Then 2');
});
console.log('Sync');
```

### Question 13
```js
new Promise((resolve, reject) => {
  resolve('Done');
}).then(data => {
  console.log(data);
});
```

### Question 14
```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
```

### Question 15
```js
Promise.resolve(1)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((x) => {
    console.log(x);
  });
```

### Question 16
```js
Promise.reject('Error')
  .then(() => {
    console.log('Success');
  })
  .catch(err => {
    console.log(err);
  });
```

### Question 17
```js
Promise.resolve('First')
  .then(data => {
    console.log(data);
    return Promise.resolve('Second');
  })
  .then(data => {
    console.log(data);
  });
```

### Question 18
```js
Promise.resolve().then(() => console.log('A'));
console.log('B');
```

### Question 19
```js
console.log("one");

setTimeout(() => {
  console.log("two");
}, 0);

Promise.resolve().then(() => {
  console.log("three");
});

console.log("four");
```

### Question 20
```js
new Promise((resolve, reject) => {
  console.log('First');
  setTimeout(() => {
    console.log('Second');
    resolve();
  }, 0);
}).then(() => {
  console.log('Third');
});
```

### Question 21
```js
Promise.resolve().then(() => {
  console.log('Promise A');
});
console.log('End');
```

### Question 22
```js
setTimeout(() => {
  console.log('Timer Done');
}, 0);
Promise.resolve().then(() => {
  console.log('Microtask Done');
});
console.log('Script End');
```

### Question 23
```js
Promise.resolve('Hi')
  .then(data => {
    console.log(data);
    throw new Error('Oops');
  })
  .catch(err => {
    console.log(err.message);
  });
```

### Question 24
```js
Promise.resolve()
  .then(() => {
    console.log('First');
    return Promise.resolve();
  })
  .then(() => {
    console.log('Second');
  });
```

### Question 25
```js
Promise.reject('Fail')
  .catch(err => {
    console.log('Caught:', err);
    return 'Recovered';
  })
  .then(res => {
    console.log('Then after catch:', res);
  });
```

---