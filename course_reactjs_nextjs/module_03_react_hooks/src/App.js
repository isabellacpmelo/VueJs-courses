/* eslint-disable no-unused-vars */
import P from 'prop-types'
import './App.css'
import React, { useState, useEffect, useCallback, useMemo } from 'react'

const Button = ({ incrementButton }) => {
  console.log('Filho renderizou')
  return <button onClick={() => incrementButton(10)}>(+)</button>
}

Button.propTypes = {
  incrementButton: P.func,
}

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num)
  }, [])

  console.log('Pai renderizou')

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />
  }, [incrementCounter])

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  )
}

export default App
