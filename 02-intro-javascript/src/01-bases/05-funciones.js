//Funciones en Javascript

/*No es recomendable asi, crear funciones de esta manera, ya que son modificables.
function saludar(nombre) {
    return `Hola ${nombre}`;
}*/

//si accidentalmente, modificamos saludar, va a romper, porque ya no es una funcion, ahora es 30
//saludar = 30;

//Es mejor crearlo en un CONST
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

console.log(saludar('Goku'));

//Funciones flecha, tambien son denominadas LAMBDA, tienen varias ventajas
const saludar2 = (nombre) => {return `Hola, ${nombre}`} 

console.log(saludar2('Jazmin'))

//Se pudo reducir mas
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Amooooor'))

//hacemos un hola mundo en func flecha
const saludar4 = () => `Hola mundo`;
console.log(saludar4())
/*
const getUser = () => {
    return{
        uid: 'ABC123',
        username: 'el_papu_bomes',
    }
}
*/
//en func flecha, para retornar un objeto, utilizamos parentesis, RETORNO IMPLICITO!!!
const getUser = () => ({uid: 'ABC123', username: 'el_papu_bomes',});
const user = getUser();
console.log(user);

/*Tarea:
1-Pasar a func flecha
2-retornar un objeto implicito
3-probarlo
function getUsuarioActivo(nombre){
    return{
        uid: 'FRR-343',
        username: nombre,
    }
};
*/

const getUsuarioActivo = (nombre) => ({uid: 'FRR-343', username: nombre});


const usuarioActivo = getUsuarioActivo('Fer');
console.log(usuarioActivo)