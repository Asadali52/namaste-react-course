import React from "react";
import ReactDOM from "react-dom/client";

/*
 <div id="parent">
    <div id="child1">
        <h1 id="heading1">This is nested heading from React !</h1>
        <h2 id="heading2">This is Sibling Heading2</h2>
    </div>
        <div id="child2">
        <h1 id="heading1">This is nested heading from React !</h1>
        <h2 id="heading2">This is Sibling Heading2</h2>
    </div>
</div>

ReactElement(Object) => HTML(brower understands)
 */

const h1 = React.createElement("h1", { key: 'h1', id: 'heading1', style: { background: 'green', textTransform: 'uppercase' } }, "This is nested heading from React !");
const h2 = React.createElement("h2", { key: 'h2', id: 'heading2' }, "This is Sibling Heading2");
const child1 = React.createElement("div", { key: 'child1', id: 'child1' }, [h1, h2]);
const child2 = React.createElement("div", { key: 'child2', id: 'child2' }, [h1, h2]);

const parent = React.createElement("div", { id: 'parent' }, [child1, child2]);

// const heading = React.createElement("h1", {
//     id: "heading",
//     style: {
//         background: 'green',
//         textTransform: 'uppercase'
//     }
// }, "This is heading from React !");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// console.log("🚀 ~ parent:", parent) // object