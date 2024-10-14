import React from 'react'


const getResult = (a, b) => a+b;


const FirstApp = () => {

  return ( //Fragment, para que funcione nuestro componente
    <>

      <h1>{getResult(666, 1)}</h1>
      {/*<code>{ JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtitulo</p>
    </>

    //Podemos utilizar un JSON.stringify(objeto), si queremos mostrar todo el objeto.
  )
}

export default FirstApp