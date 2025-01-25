import { useEffect, useState } from 'react'
import './style.css'

const useFetch = (url, options) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleString())
    setLoading(true)

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000))
      try {
        const response = await fetch(url, options)
        const jsonResult = await response.json()
        setResult(jsonResult)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        throw error
      }
    }

    fetchData()
  }, [url, options])

  return [result, loading]
}

function App() {
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'GET',
      Headers: {
        abc: '1',
      },
    },
  )

  if (loading) return <p>Loading...</p>

  if (!loading && result) {
    console.log(result)
  }

  return <h1>Oi</h1>
}

export default App
