// Desestructuración de objetos en JavaScript

// Objeto 'persona' con varias propiedades
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// Antes de la desestructuración, acceder a las propiedades de un objeto era más verboso
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// Desestructuración: permite extraer propiedades del objeto y asignarlas a variables.
// No importa el orden en el que desestructures, lo importante es el nombre de la propiedad.
const { nombre: nombreExtraido, edad, clave } = persona; // 'nombre' se renombra como 'nombreExtraido'

// Accediendo a las variables ya desestructuradas
console.log(nombreExtraido); // Tony
console.log(edad); // 45
console.log(clave); // Ironman

// Si intentas acceder a 'nombre' daría error porque la propiedad fue renombrada a 'nombreExtraido'.
// console.log(nombre); // Error: nombre is not defined

// Desestructuración en funciones
// Puedes desestructurar directamente dentro del cuerpo de una función.
const retornaPersona = (usuario) => {
    const { nombre: nombreExtraido, edad, clave } = usuario;
    console.log(nombreExtraido);
    console.log(edad);
    console.log(clave);
}

// Llamada a la función con el objeto 'persona'
retornaPersona(persona); // Imprime: Tony, 45, Ironman

// También puedes desestructurar directamente en los parámetros de la función
// Además, puedes establecer valores por defecto para propiedades que no estén en el objeto original
const retornaPersona2 = ({ nombre, edad, rango = 'Cabo' }) => {
    console.log(nombre, edad, rango); // rango toma valor por defecto si no está definido
}

retornaPersona2(persona); // Imprime: Tony, 45, Cabo

// Retornar un nuevo objeto a partir de propiedades desestructuradas
const retornaPersona3 = ({ clave, nombre, edad, rango = 'Cabo' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlong: { // Objeto anidado
            lat: 32.43232,
            long: -23.432,
        }
    }
}

// Desestructuración de objetos anidados
// Puedes extraer propiedades de un objeto anidado directamente
const { nombreClave, anios, latlong: { lat, long } } = retornaPersona3(persona);

// Imprimimos los valores desestructurados
console.log(nombreClave, anios); // Imprime: Ironman, 45
console.log(lat, long); // Imprime: 32.43232, -23.432
