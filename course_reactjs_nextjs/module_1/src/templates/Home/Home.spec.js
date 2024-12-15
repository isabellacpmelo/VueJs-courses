/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import { Home } from '.'

describe('<Home />', () => {
  test('should render search, posts and load more', () => {
    render(<Home />)
  });
});
