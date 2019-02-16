let str = "Palavra";

console.log(str.charAt(2)); //Pegar um carcatere apartir do posição na String

console.log(str.charCodeAt(2)); //valor na tabela unicode

console.log(str.indexOf('a')); //Retorna se caso existir a posição do parametro na string

console.log(str.substr(2)); //Vai criar uma substring apartir do index informado por parâmetro

console.log(str.substring(2,4)); //Vai criar uma substring apartir dos indexes informado por parâmetro

console.log('A string utilizada é: '.concat(str).concat("!")); //Concatenar strings

console.log('A string utilizada é: ' + str + "!"); //Concatenar strings

console.log(str.replace('a', '4')); //Substuição de letras

console.log('Teste1,Teste2,teste3,teste4'.split(','));//Vai transforma em um array conforme o parametro

// Tamplate String

const tamplate = `
    Palavra utilizada : ${str}
`;

console.log(tamplate);