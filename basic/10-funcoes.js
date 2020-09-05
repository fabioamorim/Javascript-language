/*
Functions:
*/

// anonymous function

() => {}; // arrow function

// Named Function
function helloWorld(){
  console.log("Hello World!");
}

helloWorld();
// Hello World!

const helloworld = () =>{ console.log("Hello World2!")}

helloworld();
// Hello World2

function foo(a,b){  // Extern function
  function boo(x){  // Intern function
      return x+x;
  }
  return boo(a) + boo(b);
}

console.log(foo(2,3));
// 10
