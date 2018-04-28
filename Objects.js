'use strict';

var person =  { 
    name: "james",
    age: 22,
    address: {
        streetNumber: 123,
        streetName: 'Jackson Rd'
    }

}

const log = function(obj) {
    console.log(obj);
}

log(person);

// all object properties have four attributes: value, writeable, enumerable, configurable
// whenever a property is given a value, we are setting the value attribute of that property.
// one could see the attribute of a prop by using Object.getOwnPropertyDescriptor(obj, propName)
log(Object.getOwnPropertyDescriptor(person, 'name'));

// to set the other attributes, you could either use Object.create() to create the object and set those prop
var cat = Object.create(Object.prototype, {
    name:{
        value: 'meowy',
        enumerable: true,
        writable: true,
        configurable: false
    }
});

// or for the existing props, use Object.defineProperty(obj, propName, {objSettingAttributes})
Object.defineProperty(person, 'name', {writable: false});

// to make a prop readonly, you could set the writable property to false.
// when you make a prop that is an object readonly, it behaves the same way as in C#
// i.e. it makes the pointer to the object readonly, the object itself could be updated

//person.name = 'john'; // since writable was set to false for the name prop, this will throw an error (when in strict mode, in non-strict mode it will fail silently!)

// however, if the prop is of type oject, setting writeable to false will only make the pointer readonly
// the object itself could be changed. For eg.
Object.defineProperty(person, 'address', {writable: false})
//person.address = { streetName: 'abbie ave'}; // this is not allowed because its trying to point to a different object, but...

person.address.streetName = 234; // this is allowed i.e. updating the object.

// to disable updating the object, set freeze property 
// todo ak 

// setting enumerable attribute of a prop to false will: 
// - not list the prop in the for in loop
// - not list the prop in Object.keys(obj)
// - not include prop in when serialized
for(let prop in person) {
    log(prop);
}
log(Object.keys(person));
// if the enumerable attribute is set to false, the prop wont be part of serialization either;
log(JSON.stringify(person));

Object.defineProperty(person, 'address', {enumerable: false});
//address wont show up
for(let prop in person) {
    log(prop);
}

log(Object.keys(person));
log(JSON.stringify(person));

// setting configurable attribute to false will:
/* - prevent from changing configurable attribute further
- prevent from changing enumerable attribute too, but the writable attribute could still be changed
- prevent from deleting the property
*/
delete person.name;

for(let prop in person) {
    log(prop);
}

Object.defineProperty(person, "name", {configurable:false});

/* 
Getter and Setters 

If there needs to be additional logic when setting or retrieving the value of the object, getter and setter can be ued. 
It allows to set a backing function to do an additional logic.

To set getter/setter, use Object.defineProperty() like below:
*/
const cat = {
    firstName: 'meowy',
    lastName: 'moo',
    age: 2
}

Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    }, 
    set: function(fullName) {
        const nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
})

console.log(cat.fullName);
cat.fullName = "ban ki"; // setting this will also update the firstName and lastName prop
console.log(cat.firstName);
console.log(cat.lastName);

//just a test
