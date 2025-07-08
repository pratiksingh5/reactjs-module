# Javascript Questions - Set 1


1. Different types of data types in javascript?

<details>
  <summary>Click to expand!</summary>

There are mainly two types of data types in JavaScript: primitive data types and object (reference) data types.

Primitive data types are the basic data types in JavaScript. They include numbers, strings, booleans, null, and undefined. Symbols are also primitive data types, that represent unique identifiers.

Object data types are data types that contain other data types. They are created using object literals or constructor functions. Objects, Arrays, and Functions are examples of object data types. 
</details>


2. What is the diffeence between == and === in javascript?

<details>
  <summary>Click to expand!</summary>

`==` compares the values of two operands for equality, while `===` compares the values of two operands for strict equality. In other words, `==` checks if the operands are equal, while `===` checks if the operands are equal and of the same type.

Here's an example of using `==` and `===` in JavaScript:

```javascript
let a = 5;
let b = 5;

console.log(a == b); // Output: true
console.log(a === b); // Output: true

a = 5;
b = '5';

console.log(a == b); // Output: true
console.log(a === b); // Output: false
```

In this example, the `==` operator is used to compare the values of `a` and `b`, and the result is `true`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `true`.

In the second example, the `==` operator is used to compare the values of `a` and `b`, and the result is `false`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `false`.

</details>


3. How to create object in javascript?

<details>
  <summary>Click to expand!</summary>

Objects are a fundamental data type in JavaScript. They can be created using object literals or constructor functions.

- Object literals 

Object literals are enclosed in curly braces `{}` and are used to create objects with key-value pairs. Here's an example of an object literal:

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

- Using Constructor Functions with the new Keyword:

Constructor functions are used to create objects with custom properties and methods. Here's an example of a constructor function:

```javascript
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person = new Person('John', 30, 'New York');
```

In this example, the `Person` function is used as a constructor function to create a new object with the specified properties.

Although there are other ways to create objects such as using the `Object.create()` method, object literals and constructor functions are the most common ways to create objects in JavaScript.

</details>

4. **What is object destructuring in JavaScript?**

<details>
  <summary>Click to expand!</summary>

Object destructuring allows you to extract values from objects and assign them to variables using a shorthand syntax.


```javascript

const user = { name: 'Alice', age: 25, city: 'Mumbai' };

// Destructuring
const { name, age } = user;

console.log(name); // Alice
console.log(age);  // 25

// You can also rename variables and provide default values: 

const { city: location = 'Unknown' } = user;
console.log(location); // Mumbai

```

</details>

5. **What are mutable and immutable values in JavaScript?**

<details>
  <summary>Click to expand!</summary>

In JavaScript, **mutability** defines whether a value can be changed **after it’s created**.

### 🔸 Immutable (cannot be changed)
All **primitive types** in JavaScript are **immutable**:

- `String`
- `Number`
- `Boolean`
- `undefined`
- `null`
- `BigInt`
- `Symbol`

```javascript
let message = 'hello';
message[0] = 'H';
console.log(message); // "hello" — strings are immutable

let count = 5;
count = count + 1; // This creates a new number, doesn't modify original
```

Even though variables can be reassigned, the value itself doesn't change — new memory is allocated.

### 🔸 Mutable (can be changed)
All **non-primitive types** in JavaScript are **mutable**:

- `Object`
- `Array`
- `Function`

```javascript

const user = { name: 'Alice' };
const newUser = user;
newUser.name = 'Bob';

console.log(user.name); // "Bob" — object is mutable

const nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4] — array is mutable

```

</details>