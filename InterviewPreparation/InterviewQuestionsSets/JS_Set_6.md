## Javascript Interview Questions - Set 6

<details>
<summary><strong> 1. What is Execution Context?</strong></summary>

In JavaScript, the Execution Context is the environment where code runs and decides what variables, objects, and functions are available to use. Each time a function runs, a new execution context is created just for that function, holding its own variables and scope.

Each execution context has two main phases:

- **Memory Creation Phase**: JavaScript first scans the code and allocates memory for variables and functions.
- **Execution Phase**: The code runs line-by-line.

</details>

<details>
<summary><strong>2. What is the Call Stack in JavaScript? </strong></summary>

The call stack is a fundamental part of the JavaScript engine used to manage function calls and execution contexts.

It's a data structure (LIFO – Last In, First Out) that keeps track of execution contexts—each time a function is called, a new execution context is created and pushed onto the stack. When a function returns, its context is popped off.

</details>

<details>
<summary><strong>3. What is the Global Execution Context (GEC)? </strong></summary>

Before any code runs, JavaScript automatically creates the Global Execution Context:

- It includes global variables, functions, and the this keyword.
- It's the base of the call stack.
- It stays in the stack until the program finishes execution.
</details>
