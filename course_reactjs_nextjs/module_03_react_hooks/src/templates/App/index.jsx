import { useEffect, useRef, useState } from 'react'
import './style.css'

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB)
}

const useFetch = (url, options) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const urlRef = useRef(url)
  const optionsRef = useRef(options)

  useEffect(() => {
    let changed = false
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url
      changed = true
    }

    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options
      changed = true
    }

    if (changed) {
      setShouldLoad((s) => !s)
    }
  }, [url, options])

  useEffect(() => {
    let wait = false
    console.log(
      `%cEffect Time: ${new Date().toLocaleString()}`,
      'background: #000; color: #A1DA87',
    )
    const controller = new AbortController()
    const signal = controller.signal
    console.log(optionsRef.current)

    setLoading(true)

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000))
      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optionsRef.current,
        })
        const jsonResult = await response.json()

        if (!wait) {
          setResult(jsonResult)
          setLoading(false)
        }
      } catch (error) {
        if (!wait) {
          setLoading(false)
        }
        console.warn(error)
      }
    }

    fetchData()

    return () => {
      wait = true
      controller.abort()
    }
  }, [shouldLoad])

  return [result, loading]
}

function App() {
  const [postId, setPostId] = useState('')
  const [result, loading] = useFetch(
    // DDSS
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      method: 'GET',
      Headers: {
        abc: `Post ID : ${postId ? postId : 'None'}`,
      },
    },
  )

  useEffect(() => {
    console.log('ID do Post', postId)
  }, [postId])

  const handleClick = (id) => {
    setPostId(id)
  }

  if (loading) return <p>Loading...</p>

  if (!loading && result) {
    return (
      <div>
        {result.length > 0 ? (
          result.map((post) => (
            <div
              key={`post-${post.id}`}
              onClick={() => {
                handleClick(post.id)
              }}
            >
              <p>{post.title}</p>
            </div>
          ))
        ) : (
          <div
            onClick={() => {
              handleClick('')
            }}
          >
            <p>{result.title}</p>
          </div>
        )}
      </div>
    )
  }

  return <h1>Oi</h1>
}

export default App
