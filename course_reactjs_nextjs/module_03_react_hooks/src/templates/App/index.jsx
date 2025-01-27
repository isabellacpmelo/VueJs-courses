import { useCallback, useEffect, useState } from 'react'

const useAsync = (asyncFunction, shouldRun) => {
  console.log('Effect time:', new Date().toLocaleString())
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')

  const run = useCallback(async () => {
    setResult(null)
    setError(null)
    setStatus('pending')

    return asyncFunction()
      .then((response) => {
        setResult(response)
        setStatus('settled')
      })
      .catch((error) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  useEffect(() => {
    if (shouldRun) {
      run()
    }
  }, [run, shouldRun])

  return [run, result, error, status]
}

const fetchData = async () => {
  throw new Error('Que chato!')
  // await new Promise((r) => setTimeout(r, 2000))
  // const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
  // const json = await data.json()

  // return json
}

function App() {
  const [posts, setPosts] = useState(null)
  const [reFetchData, result, error, status] = useAsync(fetchData, true)

  if (status === 'idle') {
    return <pre>Nada executando</pre>
  }

  if (status === 'pending') {
    return <pre>Loading...</pre>
  }

  if (status === 'error') {
    return <pre>{error.message}</pre>
  }

  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>
  }

  return 'IXXX'
}

export default App
