# React Questions - Set 5

1. What is react-router

<details>
    <summary>Click to expand!</summary>

React Router is a standard routing library for React that enables navigation between different views/pages in a React app without reloading the page (Single Page Application - SPA behavior).

<details>

2. What are the key difference between React and Angular?

<details>
    <summary>Click to expand!</summary>

# React
- Developed by Facebook.
- Uses JSX (JavaScript XML) for templating.
- Features unidirectional data flow, which means data flows in one direction (from parent to child).
- Utilizes a Virtual DOM to optimize rendering performance, making updates faster.
- Often uses Flux or Redux for state management, allowing for a predictable state container.

# Angular
- Developed by Google.
- Uses standard HTML and JavaScript/TypeScript for templating.
- Supports bidirectional data binding, meaning changes in the UI automatically update the model and vice versa.
- Works with the real DOM, which can be slower in certain scenarios due to direct manipulation of the actual DOM.
- Follows the MVC (Model-View-Controller) architecture, providing a structured approach to building applications.

</details>


3. What are synthetic events in React?

<details>
    <summary>Click to expand!</summary>

Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in.

```javascript
const Component = () => {
  const handleClick = (e) => {
    e.preventDefault(); // synthetic event
    console.log("link clicked");
  };
  return <a onClick={(e) => handleClick}>Click me</a>;
};
```
</details>


4. What are the most common approaches for styling a React application?

<details>
    <summary>Click to expand!</summary>

* CSS Classes
* Inline CSS
* Pre-processors (Sass, Stylus, and Less)
* CSS-in-JS Modules (Styled Components, Emotion, and Styled-jsx)

</details>