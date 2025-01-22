import { useContext, useEffect } from 'react'
import { PostsContext } from '../../contexts/PostsProvider/context'
import { loadPosts } from '../../contexts/PostsProvider/actions'

export const Posts = () => {
  const postsContext = useContext(PostsContext)
  const { postsState, postsDispatch } = postsContext

  useEffect(() => {
    console.log('Carregue os posts aqui')
    loadPosts(postsDispatch)
  }, [postsDispatch])

  return (
    <div>
      <h1>Posts</h1>
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}
