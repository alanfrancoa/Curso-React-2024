//Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Lanus Este',
        zip: 1824,
        lat: 14.5343,
        long: 43.432342,
    }
};

//console.table(persona); //Desde ECMAScript6, podemos si tienen el mismo nombre, lo podemos obviar.
console.log({persona : persona}); //creamos un nuevo objeto con el valor persona, apunta a persona.

//const persona2 = persona; //Lo que estoy haciendo aqui no es asignar el valor de persona a persona2, Estoy haciendo que persona2, apunte a persona.
//persona2.nombre='Jazmin (la cuerpo)';

//Al imprimir por consola, vemos que la modificacion del objeto en su posicion de memoria, es decir, ha impactado en ambas variables.
//console.log(persona)
//console.log(persona2)

//Al trabajar en React, este tipo de mutaciones no son admitidas. PARA CREAR UNA COPIA SERIA ASI:
const persona2 = {...persona}; //LO ASIGNAMOS CON SPREAD OPERATOR.


