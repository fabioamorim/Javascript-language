let temp = true;

console.log(temp);

temp = false;

console.log(temp);

temp = 1;

console.log(!!temp);

console.log("Valores verdadeiros: ");
console.log(!!10);
console.log(!!-1);
console.log(!!' ');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(!!(temp = 1));

console.log("Valores falsos");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//Utilizando em uma expressão 
console.log('' || null || 0 || 'teste'); // vai exibir o primeiro ou único valor true.