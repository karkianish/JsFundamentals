'use strict';


const colors = ['red', 'green', 'blue'];
// to get the last element of an array, we could do sth like:
colors.last = function () { return this[this.length - 1];}
console.log(colors.last());

// that works, but the last() method is limited to just the 'colors' array 
// since last() could be valid for all arrays, it would be nice to share that method among all arrays 
// i.e. in c#, its like creating an extension method or like putting a method in the base class
// it can be acheived by add the last method to the prototype object of the Array.

Object.defineProperty(Array.prototype, 'last', {
    get: function () { return this[this.length - 1];}
})
// remember, in JS, all arrays will have it's prototype linked to Array's prototype object

// now all the array instance will get access to the last method
const animals = ['lion', 'tiger', 'bear'];
console.log(animals.last);

const birds = ['sparrow', 'crow', 'peacock'];
console.log(birds.last);

// if I wanted a method instead of a property, do sth like

// -------------------------------------------------------------
Object.defineProperty(Array.prototype, 'lastFunc', {
    function () { return this[this.length - 1];}
})
console.log(birds.lastFunc());
// -------------------------------------------------------------
// ??? how to add a function to a prototype object


// What is prototype? prototype is an OBJECT that exists on EVERY FUNCTION in javascript. It doesn't exists on objects though, only on functions.
const greeter = function() {return greeter.prototype};
console.log(greeter()); // {} prototype are empty objects by default

const person = { name: 'james'};
console.log(person.prototype); // undefined - cuz objects don't have prototype property
console.log(person.__proto__); // but objects do have __proto__ property 

/**
 * Function's prototype - is the object INSTANCE (not class/type/blueprint) that will become the prototype for all object instances
 * of the function that are created using constructor function (new keyword)
 * To access prototype from the object, use [objectInstance].__proto__
 * to access function's prototype, use [FunctionName].prototype
 * ! remember both __proto__ of instance object and prototype prop of Function points to the same object
 */

 // remember - convention is to use capitalized first letter for constructor function
function Person (name, age){
    this.name = name;
    this.age = age;
}

const manager = new Person('raj', 48);

console.log('Person functions prototype');
console.log(Person.prototype);

console.log('managers prototype');
console.log(manager.__proto__);

 // ! remember both __proto__ of instance object and prototype prop of Function points to the same object
 const employee = new Person('divya', 28);

console.log('Person prototype and employee instance __proto__');
 console.log(Person.prototype === employee.__proto__);
console.log('Person prototype and manager instance __proto__');
 console.log(Person.prototype === manager.__proto__);
console.log('manager instance __proto__ and employee instance __proto__');
 console.log(employee.__proto__ === manager.__proto__);

 // *** this means, if you change any instance's __proto prop or the Function's prototype, you are updating the same object
 employee.__proto__.propEmp = 'updated from emp instance';
 manager.__proto__.propManager = 'updated from manager instance';
 Person.prototype.propPerson = 'updated from manager instance';

console.log('Person');
console.log(Person.prototype);
console.log('emp');
console.log(employee.__proto__);
console.log('mgr');
console.log(manager.__proto_);
// ***** PROTOTYPE in javascript is ALMOST identical to how STATIC props works in c#