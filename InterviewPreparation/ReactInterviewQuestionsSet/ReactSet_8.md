1. What is the purpose of callback function as an argument of setState()?

<details>
    <summary>Click to expand!</summary>

🧠 The core reason: React state updates are asynchronous and batched

React doesn't immediately update the state after you call setState() — it schedules it and may batch multiple updates together for performance.

Because state updates are asynchronous and may be batched. Using a function ensures you're working with the latest state value, especially when doing multiple or sequential updates based on previous state.

```javascript
setCount(count + 1);
setCount(count + 1); // Still uses stale value

// You might expect count to increase by 2, but both calls use the same count value, so it only increments once! 😱

setCount((prev) => prev + 1);
setCount((prev) => prev + 1);

// Now React ensures that each update uses the latest state, so the final value is correctly updated to count + 2.

// React batches multiple state updates together to avoid re-rendering multiple times.
```

</details>

2. Difference between realDOM and virtualDOM

<details>
    <summary>Click to expand!</summary>
🔸 The Real DOM:
The DOM (Document Object Model) is the browser’s live representation of a web page.
It’s a complex, tree-like structure with tons of properties, methods, and references.
Updating the real DOM is resource-heavy—every change can trigger layout recalculations and repaints, which slows down performance.
🔸 The Virtual DOM:
React’s Virtual DOM isn’t a full clone of the real DOM.
Instead, it’s a streamlined JavaScript object tree that contains just the essential information about your UI: element types, attributes, and children.
It doesn’t include browser-specific details, event listeners, or rendering logic—just enough to describe what the UI should be.
</details>