//Função de forma literal

function func1(){
    console.log('função 1')
}

const func2 = function () { console.log('função 2')}

//Armazenar em um array

const array = [function (a, b){return a+b}, func1, func2]

console.log(array[0](2,2));

//Armazenar em um atributo

const obj = {};

obj.falar = function () { return 'Olá Mundo'}

console.log(obj.falar());

//Passar uma função como param

function run (func1){
    func1();
}

run(func1);

function soma(n1,n2){
    return function(n3){
        console.log(n1+n2+n3);
    }
}

soma(2,2)(3);

