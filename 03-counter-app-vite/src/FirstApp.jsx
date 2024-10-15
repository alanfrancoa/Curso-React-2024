import React from 'react';
import PropTypes from 'prop-types';


{/*Podemos establecer los valores por defecto. */ }

const FirstApp = ({ title, subtitle, name }) => {
  //console.log(props)


  return ( //Fragment, para que funcione nuestro componente
    <>

      <h1>{title}</h1>
      {/*<code>{ JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
      <p>{name}</p>
    </>

    //Podemos utilizar un JSON.stringify(objeto), si queremos mostrar todo el objeto.
  )
}

{/*Definicion de tipos de valores y requisitos de nuestros props*/}
FirstApp.propTypes = {
  title: PropTypes.string.isRequired, /*Establecemos que sea string y que no sea nulo.*/
  subtitle: PropTypes.string,
}
{/*Definicion de valores por defecto */}
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo',
  name: 'Alan'
}

export default FirstApp