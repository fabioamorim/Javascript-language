const soma = function(x,y){
    return x + y;
}

const printResult = function (a, b, operacao=soma){
    console.log(operacao(a,b));
}

printResult(5,4);
printResult(5,4, soma);
printResult(5,4, function(x,y){
    return x-y;
});

printResult(10,20, (x, y ) => x * y);

const pessoa = {
    falar: function() {
        console.log("Olá Mundo!");
    }
}

pessoa.falar();