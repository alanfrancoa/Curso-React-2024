import React from 'react'


{/*Podemos establecer los valores por defecto. */}

const FirstApp = ({title = 'Hola, soy Alan.', subtitle}) => {
  
  //console.log(props)

  return ( //Fragment, para que funcione nuestro componente
    <>

      <h1>{title}</h1>
      {/*<code>{ JSON.stringify(newMessage)}</code> */}
      <p>{subtitle + 1}</p>
    </>

    //Podemos utilizar un JSON.stringify(objeto), si queremos mostrar todo el objeto.
  )
}

export default FirstApp