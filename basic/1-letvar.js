/**
 * var -> Possui escopo global
 * let -> Possui escopo em bloco
 * 
 */

// x foi declarado no escopo do loop
for(var x = 1;x <= 10;x++){
    console.log(x); // Pode ser acessado aqui
}

//Como possui escopo global, pode ser acessado fora do loop
console.log(x);

// y foi declarado no escopo do loop
for(let y = 1;y <= 10;y++){
    console.log(y); // Pode ser acessado aqui
}

//Como possui escopo em bloco, não poderá ser acessado fora do loop
console.log(y);

//Será gerado uma ReferenceError: y is not defined.

