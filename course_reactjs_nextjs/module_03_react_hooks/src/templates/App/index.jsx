import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

function App() {
  const [counted, setCounted] = useState([1, 2, 3, 4])

  const divRef = useRef()

  // useLayoutEffect
  useEffect(() => {
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight
  })

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1])
    divRef.current.handleClick()
    console.log(divRef.current)
  }

  return (
    <div>
      <button onClick={handleClick}>Count: {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </div>
  )
}

export default App

export const DisplayCounted = forwardRef(function ({ counted }, ref) {
  const [rand, setRand] = useState('0.24')
  const divRef = useRef()

  const handleClick = () => {
    setRand(Math.random().toFixed(2))
  }

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }))

  return (
    <div
      ref={divRef}
      style={{ height: '500px', width: '100px', overflowY: 'scroll' }}
    >
      {counted.map((c) => {
        return (
          <p key={`c-${c}`} onClick={handleClick}>
            {c} ++ {rand}
          </p>
        )
      })}
    </div>
  )
})
