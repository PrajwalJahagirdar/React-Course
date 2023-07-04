/**
 *
 * <div id="parent">
 *    <div id="child">
 *      <h1 id="heading">
 *      </h1>
 *    <div>
 * <div>
 *
 *
 *
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1 tag rendered in child Div"),
    React.createElement(
      "h2",
      {},
      "Iam h2 tag rendered in child Div, and sibling of h1"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam h1 tag rendered in child2 Div"),
    React.createElement(
      "h2",
      {},
      "Iam h2 tag rendered in child Div, and sibling of h1"
    ),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World using React"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
