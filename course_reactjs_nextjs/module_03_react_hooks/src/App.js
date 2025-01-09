import P from 'prop-types'
import './App.css'
import { useState, useEffect } from 'react'

const Button = ({ incrementButton }) => {
  console.log('Filho renderização')
  return <button onClick={() => incrementButton(10)}>(+)</button>
}

Button.propTypes = {
  incrementButton: P.func,
}

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = (num) => {
    setCounter(counter + num)
  }

  console.log('Filho renderização')

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  )
}

export default App
