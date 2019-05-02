function soma1(a,b,c){
    a = a || 1; // assume valor um se caso 'a' for falso (não existir valor)
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(soma1(), soma1(2), soma1(0,0,0))

// Ao passar os valores 0, a condição assume que o valor é falso e vai atribuir o valor 1.

function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b :  1;
    c = isNaN(c) ? 1 : c; // mais segura 

    return a + b + c;
}

console.log(soma2(), soma2(2), soma2(0,0,0));

function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma3(), soma3(2), soma3(0,0,0));
