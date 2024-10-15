import React from 'react'
import PropTypes, { number } from 'prop-types'

const CounterApp = ({value}) => {
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{value}</h2>
    </>
  )
}

CounterApp.propTypes = {
    value: number.isRequired
}


export default CounterApp