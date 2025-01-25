import { Posts } from '../../components/Posts'
import { PostsProvider } from '../../contexts/PostsProvider'
import { CounterProvider } from '../../contexts/ExampleProvider'
import './style.css'

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  )
}

export default App
