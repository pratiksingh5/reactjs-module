
1. What is the purpose of the “key” prop in React lists?

<details>
    <summary>Click to expand!</summary>

The “key” prop is used to uniquely identify elements in a list of components. It helps React efficiently update and reorder components by providing a stable identity for each item. Using keys correctly improves the performance of rendering and updating lists.

Key helps React identify which items have changed, are added, or are removed, enabling it to reuse already existing DOM elements, thus providing a performance boost.

🧩 Scenario I faced:
In one of my projects, I rendered a list of form inputs without keys. When I removed one item from the middle of the list, the input values shifted—React couldn’t track which component changed, so it reused the DOM elements incorrectly. After assigning a unique key (like item.id), the issue was resolved and the input values stayed in sync

</details>

2. What is JSX, and why is it used in React?  

<details>
    <summary>Click to expand!</summary>
    
JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like code within JavaScript. It provides a more readable and concise way to describe the structure of UI components. React uses JSX to define the structure of components, making it easier to visualize and understand the UI hierarchy.
</details>

3. Why do we need to transpile React code?

<details>
    <summary>Click to expand!</summary>

React code is written in JSX, but no browser can execute JSX directly as they are built to read-only regular JavaScript.

Thus we require to use tools like Babel to transpile JSX to JavaScript so that the browser can execute it.
</details>

4. What is Babel?

<details>
    <summary>Click to expand!</summary>

Babel is a JavaScript compiler that allows you to write modern JavaScript (ES6+ or JSX) and converts it into a version of JavaScript that can run in older browsers or environments.

</details>


5. How do you pass data from a parent component to a child component in React?

<details>
    <summary>Click to expand!</summary>

In React, data can be passed from a parent component to a child component using props.

</details>


6. What are the most common approaches for styling a React application?

<details>
    <summary>Click to expand!</summary>

* CSS Classes
* Inline CSS
* Pre-processors (Sass, Stylus, and Less)
* CSS-in-JS Modules (Styled Components, Emotion, and Styled-jsx)

</details>

7.  What is the StrictMode component and why would you use it?

<details>
    <summary>Click to expand!</summary>

StrictMode is a component included with React to provide additional visibility of potential issues in components. Suppose the application is running in development mode. In that case, any issues are logged to the development console, but these warnings are not shown if the application is running in production mode.

Developers use to find problems such as deprecated lifecycle methods and legacy patterns, to ensure that all React components follow current best practices.

can be applied at any level of an application component hierarchy, which allows it to be adopted incrementally within a codebase.
</details>
