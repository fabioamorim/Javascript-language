function area(l,a){
    const area = l * a;

    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area;
    }
}

console.log(area(2,2));
console.log(area(2)); // NaN
console.log(area()); //NaN
console.log(area(2,2,3,4,5,6));