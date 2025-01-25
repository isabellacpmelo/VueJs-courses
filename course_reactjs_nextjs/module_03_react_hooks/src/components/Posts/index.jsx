import { useContext, useEffect, useRef } from 'react'
import { PostsContext } from '../../contexts/PostsProvider/context'
import { loadPosts } from '../../contexts/PostsProvider/actions'
import { CounterContext } from '../../contexts/ExampleProvider/context'
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/ExampleProvider/actions'

export const Posts = () => {
  const isMounted = useRef(true)
  const postsContext = useContext(PostsContext)
  const { postsState, postsDispatch } = postsContext

  console.log('isMounted', isMounted.current)

  const counterContext = useContext(CounterContext)
  const { counterState, counterDispatch } = counterContext

  useEffect(() => {
    console.log('Carregue os posts aqui')
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch()
      }
    })

    return () => {
      isMounted.current = false
      console.log('isMounted', isMounted.current)
    }
  }, [postsDispatch])

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter: {counterState.counter} +
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter: {counterState.counter} -
      </button>
      <h1>Posts</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}

      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}
