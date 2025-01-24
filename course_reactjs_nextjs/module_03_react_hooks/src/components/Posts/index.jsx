import { useContext, useEffect, useRef } from 'react'
import { PostsContext } from '../../contexts/PostsProvider/context'
import { loadPosts } from '../../contexts/PostsProvider/actions'

export const Posts = () => {
  const isMounted = useRef(true)
  const postsContext = useContext(PostsContext)
  const { postsState, postsDispatch } = postsContext

  console.log(isMounted.current)

  useEffect(() => {
    console.log('Carregue os posts aqui')
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch()
      }
    })

    return () => {
      isMounted.current = false
      console.log(isMounted.current)
    }
  }, [postsDispatch])

  return (
    <div>
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
