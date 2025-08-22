# React Questions - Set 4

1. Explain the concept of the virtual DOM and its advantages.

<details>
    <summary>Click to expand!</summary>
    
The virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to perform efficient updates by comparing the virtual DOM with the previous version and calculating the minimum number of changes needed to reflect the new state. This minimizes direct manipulation of the actual DOM, leading to improved performance and responsiveness.

</details>

2. Virtual DOM is not what you think!

<details>
    <summary>Click to expand!</summary>

- Many people assume VDOM means that React doesn’t touch the real DOM until everything is rendered, but that's not true. React still interacts with the real DOM. The VDOM helps decide what to change, but actual changes happen on the real DOM.

- Key misunderstanding: People think that VDOM eliminates direct DOM manipulation entirely, but in reality, it optimizes how those manipulations happen.

</details>


3. What is React reconciliation?

<details>
    <summary>Click to expand!</summary>

React reconciliation is the process React uses to figure out what has changed in the virtual DOM when a component’s state or props update. Instead of updating the whole page, React compares the new virtual DOM with the old one, finds the differences, and then updates only those parts in the real DOM.

</details>


4. How does React's reconciliation algorithm work?

<details>
    <summary>Click to expand!</summary>

React's reconciliation algorithm is the process it uses to efficiently update the DOM when the app's state or props change. It determines what has changed and applies minimal updates to the real DOM.

⚙️ Key Concepts:
- 1. Virtual DOM Comparison
React keeps a virtual DOM — a lightweight copy of the real DOM.
On every update, React compares the new virtual DOM with the previous one (this is called diffin).

- 2. Diffing Algorithm (Heuristics)
React does not deeply compare entire trees.
It uses two assumptions to speed up the process:

</details>

5. Why is it not advisable to update state directly, but use the setState call?

<details>
    <summary>Click to expand!</summary>

The conventional way to update state is to use the setState call. Without using it, the user would still be able to modify the state, but it would not update the DOM to reflect the new state.

</details>








