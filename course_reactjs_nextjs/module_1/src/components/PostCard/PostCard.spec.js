import { render, screen} from '@testing-library/react'
import { PostCard } from '.'
import { postCardProps } from './mock'

const props = postCardProps

describe('<PostCard />', () => {
    test('should render PostCard correctly', () => {
        render(<PostCard {...props} />)

        expect(screen.getByRole('img', { name: /title mock/i })).toHaveAttribute('src', 'img/img.png')
    })
})