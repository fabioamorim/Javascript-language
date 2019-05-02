const print = function (a,b)
{
    console.log(a + b);
}

print(5,4);

//arrow function 

const soma = (a,b) => {
    return a + b;
}

console.log(soma(8,9));

// arrow function com retorno implícito

const subtracao = (a,b) => a - b;

console.log(subtracao(10,5));