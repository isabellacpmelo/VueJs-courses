import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function App() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/abc/slug/id');
    }, 5000);
  }, [history]);

  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
