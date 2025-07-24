# React Questions - Set 2

1. What is state in React, and how is it different from props?

<details>
    <summary>Click to expand!</summary>
    
State is a mechanism for managing and storing dynamic data within a component. Unlike props, which are passed from parent to child and are read-only, state is local to a component and can be updated using the setState method. State enables components to re-render when data changes, updating the UI dynamically.
</details>

2. What are React hooks, and how do they differ from class components?

<details>
    <summary>Click to expand!</summary>
    
React hooks are functions that allow you to use state and other React features in functional components. They provide an alternative to class components by enabling the use of state and lifecycle features without writing a class. Hooks, such as useState and useEffect, streamline component logic and make it more concise.
</details>

3. What are React Hooks rules?

<details>
    <summary>Click to expand!</summary>

Hooks in React must be called at the top level (not inside loops or conditions), and they must be called from React functional components or custom Hooks.

</details>
