import { useState } from 'react'
import React from 'react'
import PropTypes, { number } from 'prop-types'

 
{/* const handleAdd =(e) => {console.log(e)} //Como la funcion no afecta a nada de nuestro componente, como buena practica, extraemos esa funcion del mismo. */}

const CounterApp = ({value}) => {
    /*    const handleAdd =() => {

        console.log('+1')
        value = 1000;
        console.log(value) 
        ESTO NO FUNCIONA BIEN, La unica manera de realizarlo correctamente es modificando su estado
    }
     */

    const [counter, setCounter]= useState(value)

    const handleSubstract = () => setCounter( counter - 1 )

    const handleAdd = () => {
        setCounter( counter + 1 )
        //setCounter( (c) => c + 1 )
    }

    const handleReset = () => setCounter(value)
    
  return (
    <>
    <h1>CounterApp</h1>
    <h2> {counter} </h2>

    <button onClick={handleAdd}> +1 </button>{/*(e) => handleAdd(e) //en realidad seria asi, pero lo obviamos por ser el mismo parametro*/}
    <button onClick={handleSubstract}> -1 </button>
    <button onClick={handleReset}> Reset </button>
    
    </>
  )
}

CounterApp.propTypes = {
    value: number.isRequired
}


export default CounterApp