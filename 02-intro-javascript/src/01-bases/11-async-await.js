// Async y Await

/*
// getImagePromesa (usando Promesas)
// Esta función define una promesa que se resuelve con una URL fija ('https://www.uehfuwe.com').
// Es una forma más concisa de escribir una promesa usando funciones flecha.
const getImagePromesa = () => new Promise(resolve => resolve('https://www.uehfuwe.com'));

// Llamamos a getImagePromesa() y usamos .then() para manejar el valor resuelto (la URL).
getImagePromesa().then(console.log);
*/

// getImage (usando Async/Await)
// Esta función utiliza la sintaxis `async/await` para manejar operaciones asíncronas de una manera más legible.
const getImage = async () => {
    try {
      // Define la clave API (reemplaza con tu clave real)
      const apiKey = 'Aqui va el api key';
  
      // Realiza una petición fetch a la API de Giphy usando la clave
      const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  
      // Espera a que la respuesta se convierta a JSON y desestructura el objeto data
      const { data } = await respuesta.json();
  
      // Desestructura la URL de los objetos anidados dentro de data
      const { url } = data.images.original;
  
      // Crea un elemento img y establece su source como la URL obtenida
      const img = document.createElement('img');
      img.src = url;
  
      // Agrega el elemento img al cuerpo del documento
      document.body.append(img);
    } catch (error) {
      // Captura cualquier error que ocurra durante las operaciones asíncronas
      console.error(error);
    }
  };
  
  // Llama a la función getImage para ejecutar las operaciones asíncronas
  getImage();