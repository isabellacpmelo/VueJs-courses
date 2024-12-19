import logo from './logo.svg'
import './App.css'
import { Component } from 'react'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.handleClick = this.handleClick.bind(this)

  //   this.state = {
  //     reverse: false,
  //   }
  // }

  state = {
    reverse: false,
  }

  // handleClick() {
  //   const { reverse } = this.state
  //   this.setState({ reverse: !reverse })
  // }

  handleClick = () => {
    const { reverse } = this.state
    this.setState({ reverse: !reverse })
  }

  render() {
    const { reverse } = this.state
    const reverseClass = reverse ? 'reverse' : ''

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <button type="button" onClick={this.handleClick}>
            Reverse {reverseClass}
          </button>
        </header>
      </div>
    )
  }
}

export default App
