// in javascript, there are two types of scope. function scope and block scope

// function scope
// is created whenever a new function is declared. if a variable is declared at the 
// global scope, the variable will be a part of the window object

var scope = "global"

function greet(){
    var varFnScope = "functionScope"
}

console.log(scope)
console.log(varFnScope)

greet()
console.log(varFnScope)


// how does scope differ in arrow functions?
