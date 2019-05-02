/**
 * 
 * Javascript: Arrays são heterogêneos e não possuem tamanho fixo.
 * 
 */

 //Forma literal

 const value = [1,2,3,4,5];

 console.log(value);

 console.log(value[0]);

 console.log(value[9]); // Não existe posição 9 neste array, irá retornar undefined

 value.push(6,7,8,9,10); // Inserindo valores no array

 console.log(value.length); // Tamanho array

 delete value[2]; // remove o elemento da posição 2, porém a posição dois fica vazia

 console.log(value.length);

 console.log(value.pop()) //Retira o ulitmo elemento que foi inserido no array


