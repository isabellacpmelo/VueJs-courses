import './App.css'
import { useState, useEffect } from 'react'
// import { Component, useState } from 'react'

const eventFn = () => {
  console.log('h1 clicado')
}

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // componentDidUpdate - executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate')
  // })

  // componentDidMount - executa 1 vez
  // useEffect(() => {
  //   console.log('componentDidMount')
  // }, [])

  // Com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn)

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn)
    }
  }, [])

  useEffect(() => {
    console.log('Contador mudou para:', counter)
  }, [counter])

  return (
    <div className="App">
      <h1>
        C1: {counter} C2: {counter2}
        {''}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>C1 + 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>C2 + 1</button>
    </div>
  )
}

// class App extends Component {
//   // constructor(props) {
//   //   super(props)

//   //   this.handleClick = this.handleClick.bind(this)

//   //   this.state = {
//   //     reverse: false,
//   //   }
//   // }

//   state = {
//     reverse: false,
//   }

//   // handleClick() {
//   //   const { reverse } = this.state
//   //   this.setState({ reverse: !reverse })
//   // }

//   handleClick = () => {
//     const { reverse } = this.state
//     this.setState({ reverse: !reverse })
//   }

//   render() {
//     const { reverse } = this.state
//     const reverseClass = reverse ? 'reverse' : ''

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     )
//   }
// }

export default App
