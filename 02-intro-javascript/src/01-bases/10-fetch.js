// Fetch API
const apiKey = 'Aqui va el api Key';

// Realizamos una petición a la API de Giphy para obtener un GIF aleatorio
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*
// Forma más explícita de escribir las promesas en cadena
peticion.then(resp => {
    resp.json().then(data => {
        console.log(data)
    })
})
*/

// Forma más concisa utilizando el encadenamiento de promesas
peticion
    // Convertimos la respuesta a formato JSON
    .then(resp => resp.json())
    // Extraemos la URL del GIF y creamos un elemento <img>
    .then(({data}) => {
        const {url} = data.images.original; // Desestructuración para obtener la URL
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    // Capturamos cualquier error que pueda ocurrir en la cadena de promesas
    .catch(console.warn);

// Este único `catch` es suficiente para manejar errores en cualquier punto de la cadena.
// Si quisiéramos manejar errores de forma más específica, podríamos agregar más `catch`
// en cada `then`.