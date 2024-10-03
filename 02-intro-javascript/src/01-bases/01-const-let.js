//Variables y Constantes
const nombre = "Alan";
const apellido = "Alvarez";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//VAR no debe usuarse...
if(true){
    const nombre = "Pedro";
    console.log(nombre);
    //aqui es posible declarar la misma variable por el SCOOPE.
}

//fuera del scoope, el valor de dado es 4.
console.log(valorDado);