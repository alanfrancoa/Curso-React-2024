import React from 'react';
import PropTypes from 'prop-types';


{/*Podemos establecer los valores por defecto. */ }

const FirstApp = ({ title, subtitle }) => {
  //console.log(props)


  return ( //Fragment, para que funcione nuestro componente
    <>

      <h1>{title}</h1>
      {/*<code>{ JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
    </>

    //Podemos utilizar un JSON.stringify(objeto), si queremos mostrar todo el objeto.
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired, /*Establecemos que sea string y que no sea nulo.*/
  subtitle: PropTypes.string.isRequired,
}

export default FirstApp