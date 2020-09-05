/**
 *  Loop
 * 
 * -for
 * -while
 * -do/while * 
 */

//for
for(let i=0;i<100;i++){
    console.log(i);
}

//while
let aux = true;
let j = 0;

//while
while(aux){
    console.log(j);

    if(j == 10){
        aux = false;
    }

    j++
}

//do while
let k = 0;

do{
    console.log(k);
    
    if(k==20){
        aux = true;
    }

    k++;
}while(!aux)