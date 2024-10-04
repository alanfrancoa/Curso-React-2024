//Arreglos en JS

//const arreglo = new Array(100); //Array literal
//arreglo.push(1); 
//Que sea literal, no significa que no sea modificable. NO SE USA TANTO.

const arreglo = [1, 2, 3, 4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);
//No es recomendable usar Push, porque modifica el objeto principal, siempre va ser recomendable usar el SPREAD (...)
console.log(arreglo);

//let arreglo2 = arreglo; //"Hacemos una copia"
//arreglo2.push(5); //al insertar un nuevo valor en el nuevo array

//console.log(arreglo)
//console.log(arreglo2)
//VEMOS QUE SE MODIFICA EN AMBOS

//sin el operador SPREAD, nos quedaria una copia del primer array dentro del segundo y un valor adicional por fuera.
let arreglo2 = [...arreglo, 5];
console.log(arreglo2)

//Lo realizamos de la manera correcta, extrayendo la informacion del array.
let arreglo3 = [...arreglo, 5];

console.log(arreglo)
console.log(arreglo3)

//const arreglo4 = arreglo3.map();//Uncaught TypeError: undefined is not a function. Porque no le estamos pasando una funcion.

// El método map nos permite crear un nuevo arreglo basado en el original,
// aplicando una función callback a cada uno de los elementos. En este caso, estamos duplicando los valores.
const dobles = arreglo3.map(function(num){
    return num*2;
});

console.log(dobles)


