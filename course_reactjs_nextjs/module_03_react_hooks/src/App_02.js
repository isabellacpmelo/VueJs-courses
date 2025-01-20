/* eslint-disable no-unused-vars */
import './App.css'
import { useReducer } from 'react'

const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
}

const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'muda':
      console.log('Chamou muda com', action.payload)
      return { ...state, title: action.payload }
    case 'inverter':
      console.log('Chamou inverter')
      const { title } = state
      return { ...state, title: title.split('').reverse().join('') }
  }

  console.log('Nenhuma action encontrada')

  return { ...state }
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState)
  const { counter, title, body } = state

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'qualquerCoisa' })}>
        Qualquer coisa
      </button>
    </div>
  )
}

export default App
