# Javascript Interview Questions - Set 4

1. Difference between var, let and const?

<details>
  <summary>Click to expand!</summary>

- var: The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside a function, the scope of the variable is global.
Defaullt value of var is undefined.

- let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {}.
Default value of let is uninitialized.

- const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
Default value of const is uninitialized.

</details>


2. **Scope and Scope Chain?**

<details>
  <summary>Click to expand!</summary>

Scope governs the accessibility of variables in different parts of the code. It determines where a variable can be accessed and where it cannot.

There are three types of scopes:

- **Global Scope**: Variables declared in the global scope can be accessed from anywhere in the code.
- **Local Scope**: Variables declared within a function are only accessible within that function.
- **Block Scope**: Variables declared inside a block (like within curly braces `{}`) are only accessible within that block.

**Scope Chain**:

Scope chain means a chain of references. JavaScript doesn't give up; it has a hunting mechanism for variables. It keeps searching for the variable. First, it will check in the local scope to see if the variable is accessible. If not, it will look in the outer scope. It will keep going until it reaches the global scope or the global execution context. This continuous hunting for a variable during the chain is called scope chaining. The execution context always searches from the inner scope to the outer scope, but it can't go from the outer scope to the inner scope.

</details>


3. Explain hoisting in javascript.

<details>
  <summary>Click to expand!</summary>

Hoisting is a JavaScript feature that allows you to use variables and functions before they are declared. This means that you can use variables and functions before they are defined in your code. Hoisting is done by the JavaScript engine, which moves the declaration of variables and functions to the top of their `scope`. 

In JavaScript, before executing any code, the JavaScript engine performs a memory preparation phase known as hoisting. During this phase, the engine allocates memory for variables and functions.

Function declarations are fully hoisted, meaning they can be invoked anywhere within their scope, even before their actual line of declaration.

Variables declared with var are hoisted and initialized with undefined. This means you can access var variables before their declaration, but their value will be undefined.

On the other hand: Variables declared with let and const are also hoisted but remain uninitialized. Accessing them before their declaration in the code results in a ReferenceError.

Here's an example of hoisting in JavaScript:

```javascript
divideByTen(100)

function divideByTen(x) {
  console.log(x / 10);  
}
```

In this example, the `divideByTen` function is called with the argument `100`. The `divideByTen` function is defined after the call to `divideByTen`, so the function is hoisted to the top of the scope. This means that the `divideByTen` function is available to be called before it is defined.


</details>