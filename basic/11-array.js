/*
  Array.
*/

var array1 = [10,20,30];
var array2 = ['a', 'b', 'c', 'd'];
var array3 = ['foo', 10, 'a', 1.23];

console.log(array1); // [ 10, 20, 30 ]
console.log(array2); // [ 'a', 'b', 'c', 'd' ]
console.log(array3); // [ 'foo', 10, 'a', 1.23 ]

console.log(array1[0])// 10

console.log(array1.length);// Return array size - 3

// Iterate an array

array1.forEach(function (item, indice, array) {
  console.log(item, indice);
});

/*
Result:
10 0
20 1
30 2
*/

array1.push(50); // add an element in last position.
console.log(array1);

array1.pop(); // remove the last element.
console.log(array1);

array1.shift(); // remote the first element.
console.log(array1);

array1.unshift(1); // add an element in first position.
console.log(array1);

console.log(array1.indexOf(20));// return the position.

console.log(array1.splice(1, 1));// remove one element tha is in position 1
console.log(array1);

var array4 = array1.slice();
console.log(array4);
