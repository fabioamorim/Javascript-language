//Funções sem retorno

function soma(n1,n2)
{
    console.log(n1+n2);
}

soma(2,3);
soma(2); //Irá retornar Not a Number NaN
soma(2,3,4,5,6) // Utiliza os dois primeiros parametros e os demais serão ignorados

//Função com retorno

function soma2(n1,n2 = 5)
{
    return n1 + n2;
}

console.log(soma2(10));