//Desestructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Bulma',];

//Mostramos los elementos del array
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//Extraemos
const [ p1 ] = personajes;
//CON f2 podemos renombrar todo directamente desde la referencia.
console.log(p1)

const [ , p2 ] = personajes; //indico que el primer elemento no me sirve.
console.log(p2)

const [ , , p3 ] = personajes; //indico que el primer y segundo elemento no me sirve.
console.log(p3)

const retornaArreglo = () => {
    return['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//TAREA
//Crear una funcion useState
//El primer valor del arreglo se llamara nombre
//El segundo se llama setnombre

const useState = (valor) => {
    return[valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();