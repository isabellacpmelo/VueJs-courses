/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from 'react'

const useMyHook = (callback, delay = 1000) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current()
    }, delay)

    return () => clearInterval(interval)
  }, [delay])
}

// App.jsx
function App() {
  const [counter, setCounter] = useState(0)
  const [delay, setDelay] = useState(1000)
  const [incrementor, setIncrementor] = useState(100)

  useMyHook(() => setCounter((c) => c + 1), delay)

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor)
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor)
        }}
      >
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  )
}

export default App
