# React Questions - Set 5

1. What is prop drilling and how to avoid it?

<details>
    <summary>Click to expand!</summary>

Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.

The disadvantage of using Prop drilling makes components receive data they don’t need, making the code harder to manage and maintain.

Prop drilling can be avoided using the Context API or some form of State Management library.

</details>


2. What is the ‘useEffect’ hook in React and when would you use it?

<details>
    <summary>Click to expand!</summary>

The useEffect hook is used in React to perform side effects such as fetching data, updating the document title, or adding event listeners. It allows you to run a function after rendering a component, and optionally specify dependencies that should trigger a re-run of the function.

</details>

3. What is the difference between Rendering Vs Mounting?

<details>
    <summary>Click to expand!</summary>

# Rendering:
Rendering refers to the process of generating the user interface (UI) based on the component's state and props. It happens when a component is converted into DOM elements.

# Mounting:  
Mounting is a specific phase in the React component lifecycle when a component is inserted into the DOM for the first time. It is part of the initial rendering process.

</details>