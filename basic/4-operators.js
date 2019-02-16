/**
 * 
 * Javascript supports the following types os operators
 * 
 * - Arithmetic Operators
 * - Comparison Operators
 * - Logical (or Relational) Operators
 * - Assignment Operators
 * - Conditional (or ternary) Operators
 */

// - Arithmetic Operators

let a = 10;
let b = 10;

//Addition
console.log(a + b);

//Subtraction
console.log(a - b);

//Multiplication
console.log(a * b);

//Division
console.log( a / b);

//Modulus
console.log(a % b);

//Increment 
a++
console.log(a);

//Decrement
b--;
console.log(b);

// - Comparison Operators

//Equal == 
console.log(a == b); //false

//Not equal !=
console.log( a != b); //true

//Greater than
console.log(a > b); //true

//Less than
console.log(a < b); //false

//Greater than or equal to
console.log(a >= b); //true

//Less than or equal to
console.log(a <= b); //false

// - Logical Operators

a = 1;
b = 1;

// && Logical AND
console.log( a && b == 1);

// || Logical OR
console.log(a || b == 1);

// ! Logical NOT
console.log(! a && b);

// - Assignment Operators

let c = 0;

// = Simple Assignment
c = a + b;

// += Add and Assignment
c += a;// Equivalent c = c + a

// -= Subtract an Assignment
c -= a;// Equivalent c = c - a

// *= Multiply adn Assignment
c *= a;// Equivalent c = c * a

// /= Divide and Assignment
c %= a;/// Equivalent c = c % a

// - Conditional Operator (Ternary)

// ? : (Conditional)

let result = (a>b) ? 'A é maior que B': 'A é menor que B';

console.log(result);

