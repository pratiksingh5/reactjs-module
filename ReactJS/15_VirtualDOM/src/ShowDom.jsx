
import { useEffect } from "react";
function ShowDom() {
  useEffect(() => {
    // Real DOM
    console.log("Real DOM:", document.getElementById("container"));

    // Virtual DOM
    const vdom = (
      <div id="container">
        <h1>Hello React</h1>
        <p>This is a paragraph</p>
      </div>
    );
    console.log("Virtual DOM:", vdom);
  }, []);

  return (
    <div id="container">
      <h1>Hello React</h1>
      <p>This is a paragraph</p>
    </div>
  );
}


export default ShowDom