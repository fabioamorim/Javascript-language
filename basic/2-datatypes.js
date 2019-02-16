/**
 * javascript data types
 * 
 * Numbers (Integers and floating-point values)
 * Strings
 * Boolean (true or false)
 * 
*/

let n1 = 10;
let n2 = 3.25;
let text = "This text string";
let temp = true;
let temp1 = null;
let temp2 = undefined;

console.log(typeof n1, typeof n2);
//output: number number

console.log(typeof text);
//output: string

console.log(typeof temp);
//output: boolean

console.log(temp1);
//output: null

console.log(temp2);
//output: undefined

//Tipagem de variáveis: Javascript é fracamente tipada. 
//A mesma variável pode receber qual tipo de dado.

let value = 1;

console.log(value);
//output: 1

value = 9.99;

console.log(value);
//output: 9.99

value = "This is a string"

console.log(value);
//output: This is a string

value = false;

console.log(value);
//output: false

