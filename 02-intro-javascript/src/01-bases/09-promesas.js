import getHeroeByID from "./08-imp-exp";

/*
// Promesa para obtener un héroe por ID
//
// Esta promesa simula una operación asíncrona (en este caso, una petición a un servidor).
// Después de 2 segundos, se resuelve con el héroe encontrado o se rechaza con un error.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Simulación de una petición a un servidor para obtener el héroe
        const heroe = getHeroeByID(2); // Aquí se obtiene el héroe por su ID

        // Si se encuentra el héroe, se resuelve la promesa con el héroe como resultado.
        resolve(heroe); 

        // Si no se encuentra el héroe, se rechaza la promesa con un mensaje de error.
        // reject('Heroe no encontrado.');
    }, 2000);
});

// Manejo del resultado de la promesa:
promesa.then((heroe) => {
    console.log('Heroe:', heroe); // Se imprime el héroe si la promesa se resuelve
})
.catch(err => {
    console.warn(err); // Se muestra un aviso si la promesa se rechaza
});
*/

// Función asíncrona para obtener un héroe por ID
//
// Esta función encapsula la lógica de la promesa en una función reutilizable.
const getHeroeByIDAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeByID(id);

            // Se verifica si se encontró el héroe y se resuelve o rechaza la promesa accordingly.
            if (heroe) {
                resolve(heroe);
            } else {
                reject('Heroe no encontrado.');
            }
        }, 2000);
    });
}

/*
// Ejemplo de uso de la función getHeroeByIDAsync
//
// Se obtiene el héroe con ID 15 y se imprime por consola.
// Si ocurre un error, se muestra un aviso.

getHeroeByIDAsync(15)
    .then(heroe => console.log(heroe))
    .catch(err => console.warn(err));
*/

// Pasando directamente las referencias de funciones a then y catch
getHeroeByIDAsync(5).then(console.log).catch(console.warn);