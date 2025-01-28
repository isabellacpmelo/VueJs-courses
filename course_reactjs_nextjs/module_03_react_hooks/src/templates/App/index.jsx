import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'

function App() {
  const [counted, setCounted] = useState([1, 2, 3, 4])

  const divRef = useRef()

  // useLayoutEffect
  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight
  })

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1])
  }

  return (
    <div>
      <button onClick={handleClick}>Count: {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '500px', width: '100px', overflowY: 'scroll' }}
      >
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>
        })}
      </div>
    </div>
  )
}

export default App
