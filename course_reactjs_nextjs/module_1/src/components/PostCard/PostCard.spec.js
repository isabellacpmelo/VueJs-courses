/* eslint-disable testing-library/no-node-access */
import { render, screen} from '@testing-library/react'
import { PostCard } from '.'
import { postCardProps } from './mock'

const props = postCardProps

describe('<PostCard />', () => {
    test('should render PostCard correctly', () => {
        render(<PostCard {...props} />)

        expect(screen.getByAltText(/title mock/i))
            .toHaveAttribute('src', 'img/img.png')

        expect(screen.getByRole('heading', { name: /title mock/i }))
            .toBeInTheDocument()

        expect(screen.getByText('body mock'))
            .toBeInTheDocument()
    })


    test('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />)

        expect(container.firstChild).toMatchSnapshot()
    })
})