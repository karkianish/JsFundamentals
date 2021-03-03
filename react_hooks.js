// stateful functions: basically the function builds upon the state it had from the last run

// approach 1: declare state globally
let amount = 1;

function addToAmount(amt) {
  amount = amt + amount;
  return amount;
}

console.log(addToAmount(1));
console.log(addToAmount(1));
console.log(addToAmount(1));
console.log(addToAmount(1));
// problem: amount variable could be modified by any outside function

// approach 2: create a higher order function that closes over the state variable
// this approach protects our variable from being accessed by whoever wants it. basically, makes it private
// only way to access the `amount` variable is by invoking the function returned by getAddToAmount. this is `closure`.
function getAddToAmount() {
  let amount = 1;
  return (amt) => {
    amount = amt + amount;
    return amount;
  };
}

const addToAmount = getAddToAmount();
console.log(addToAmount(1));
console.log(addToAmount(12));
console.log(addToAmount(13));
console.log(addToAmount(16));

const React = (function () {
  let hooks = [];
  let index = 0;
  function useState(val) {
    // when the value of index is assigned, the value will be frozen
    let hookIndex = index;

    // the use of || operator forces the value of the state to be evaluated everytime it is needed
    let state = hooks[hookIndex] || val;

    let setState = (newVal) => {
      hooks[hookIndex] = newVal;
    };

    index = index + 1;
    return [state, setState];
  }

  function render(component) {
    // when the render is called, the component (basically a function) is invoked. 
    // so the hooks will have to be created again, so it is important to set the value back to 0.
    index = 0;
    const c = component();
    c.render();
    return c;
  }
  return { useState, render };
})();

function MyComponent() {
  const [num, setNum] = React.useState(1);
  const [text, setText] = React.useState("text");

  return {
    render: () => console.log({ num, text }),
    setText: (t) => setText(t),
    setNum: (n) => setNum(n),
  };
}

var app = React.render(MyComponent);
app.setNum(3);
// app.setText("hey hey");
var app = React.render(MyComponent);
app.setText("hey hey");
var app = React.render(MyComponent);
// app.setNum("hey hey");