/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import { Posts } from '.'

const props = {
    posts: [
        {
            id: 1,
            title: 'Title Mock 1',
            body: 'Body Mock 1',
            cover: 'img/img1.png'
        },
        {
            id: 2,
            title: 'Title Mock 2',
            body: 'Body Mock 2',
            cover: 'img/img2.png'
        },
        {
            id: 3,
            title: 'Title Mock 3',
            body: 'Body Mock 3',
            cover: 'img/img3.png'
        },
    ],
}

describe('<Posts />', () => {
    test('should render Posts', () => {
        render(<Posts {...props} />)
    })
})