# React Questions - Set 7

1. Why is it not advisable to update state directly, but use the setState call?

<details>
    <summary>Click to expand!</summary>

The conventional way to update state is to use the setState call. Without using it, the user would still be able to modify the state, but it would not update the DOM to reflect the new state.

</details>

2. What is the difference between Rendering Vs Mounting?

<details>
    <summary>Click to expand!</summary>

# Rendering:
Rendering refers to the process of generating the user interface (UI) based on the component's state and props. It happens when a component is converted into DOM elements.

# Mounting:  
Mounting is a specific phase in the React component lifecycle when a component is inserted into the DOM for the first time. It is part of the initial rendering process.

</details>


3. What is the ‘useEffect’ hook in React and when would you use it?

<details>
    <summary>Click to expand!</summary>

The useEffect hook is used in React to perform side effects such as fetching data, updating the document title, or adding event listeners. It allows you to run a function after rendering a component, and optionally specify dependencies that should trigger a re-run of the function.

</details>

4. What are the benefits of using typeScript in React?

<details>
    <summary>Click to expand!</summary>

✅ Static Typing – Catches errors at compile time, reducing runtime bugs.
🧠 Better Autocomplete & IntelliSense – Improved editor support for props, state, functions, etc.
📦 Improved Code Readability & Maintainability – Easier for teams to understand data flow.
🔄 Refactoring is safer – TS makes it easier to update and refactor code with confidence.
🔍 Early Bug Detection – Especially useful in large apps with complex components.

</details>