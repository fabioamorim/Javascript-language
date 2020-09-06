/*
  Object
*/

// Creating Object

var ob1 = new Object(); //explicit statement
var ob2 = {} // implicit statement

console.log(typeof ob1);
// object
console.log(ob1);
// {}

// Properties

ob1.name  = "John";
ob1.age   = 56;
ob1.address = {
    street: "street one",
    number: 02
};

console.log(ob1);

var obj3 = {
    name: "Jack",
    age: 32,
    address:{street: "street name", number: 100}
}

console.log(obj3);
