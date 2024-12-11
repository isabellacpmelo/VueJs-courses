/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextInput } from '.'


describe('<TextInput />', () => {
    test('should debug TextInput', () => {
        const fn = jest.fn()

        const { debug } = render(<TextInput handleChange={fn} searchValue={'testando'} />)
        debug()
    })

    test('should have a value of searchValue', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue={'testando'} />)

        const input = screen.getByPlaceholderText(/type your search/i)
        // expect(input).toBeInTheDocument()
        expect(input.value).toBe('testando')
    })

    test('should render call handleChange function on each key pressed', async () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} />)

        const input = screen.getByPlaceholderText(/type your search/i)

        const value = 'o valor'

        await userEvent.type(input, value)

        expect(input.value).toBe(value)
        expect(fn).toHaveBeenCalledTimes(value.length)
    })
})