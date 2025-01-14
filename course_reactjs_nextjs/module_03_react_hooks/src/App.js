/* eslint-disable no-unused-vars */
import P from 'prop-types'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  console.log('Pai renderizou')

  // Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json())
      .then((result) => setPosts(result))
  }, [])

  console.log(posts)

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
