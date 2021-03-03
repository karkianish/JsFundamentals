``` js
function MyComponent() {
    return <div>hello!</div>
}
```

1. how does a browser read `<div>hello!</div>` even though that isn't a valid javascript?

   - the snippet is a not a javascript code instead it is a `jsx` snippet. before the browser receives that snippet, it is transplied by `babel` to the equivalent `js` code. The equivalent js code is `React.CreateElement(div, null, "hello!")`.

1. React function name should **ALWAYS** begin with a *capital letter*. That is a react rule. If the function name doesn't begin with a capital letter, React will look for an html element instead of a react component. Also, the attributes should be named in camelCase eg. `onClick`.

1. React component is very much like a normal javascript functions. It takes in an input (`props`) and returns output (html elements to render).

1. `npx` is a cli tool that lets us run a node package locally without having to install it globally. eg. when we run `npx create-react-app my-app`, `npx` will install the `create-react-app` temporarily, invoke it to create an app, then remove it. It solves the problem of having to install a tool just to use it once. More about npx at: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
   
1. `props` are immutable. `props` are passed in to the function components. `states` (class components) are mutable. 

1. in `javascript`, to invoke a function, do `greet()` (the parenthesis), to pass a reference to a function just pass the name, `greet`.
   
1. when returning a `jsx` from a react component, the returned `jsx` can have only one parent. if there are sibling nodes, either wrap inside a single parent or wrap them insider <React.Fragement> which is equivalent to `<> </>`. Using React.Fragment will skip adding a parent node to the dom.

3. react allows `one way flow of data` meaning _values_ and _behaviors_ can flow from parent components to child components.

4. when designing a react component, a decision needs to be made regarding where to manage the state. the answer to that is `in the component itself if no other components need it, if other components do need it then define it on the first common ancestor of the components that need it`

5. if there is a need to pass a reference to a function with parameters, use `lambda function` i.e. `<Button clickHandler={() => handleClick(args)}><Button/>`

## Tree Reconciliation
react uses virtual dom to represent the dom in memory. whenever a new update is recieved to the dom tree, react'd diffing algorithm can identify and apply changes to the only dom nodes that changed rather than throwing away the whole thing and starting anew. 

Read more on this.

