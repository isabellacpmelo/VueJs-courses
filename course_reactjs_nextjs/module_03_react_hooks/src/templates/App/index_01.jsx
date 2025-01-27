import { useState, useEffect } from 'react'
import { useFetch } from './use-fetch'

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
