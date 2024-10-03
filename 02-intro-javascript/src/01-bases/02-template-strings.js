const nombre = 'Alan';
const apellido = 'Alvarez';

//const nombreCompleto = nombre + " " + apellido;
//definicion del template string
const nombreCompleto = `${nombre} ${apellido} `;

//Los template Strings, nos dejan guardar caracteres especiales como saltos de linea.
const nombreCompleto2 = `
${nombre} 
${apellido}
${5+5}`; //tambien admiten operaciones de Javascript
console.log(nombreCompleto2);

function getSaludo(nombre) {
    return 'Hola '+nombre;
}

console.log(`Estes es un texto Template String: ${getSaludo(nombreCompleto)}`);