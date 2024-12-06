import { render, screen } from '@testing-library/react'
// import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('<Button  />', () => {
    test('should render the button with the text "Load more"', () => {
        render(<Button text="Load more"/>)
        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i })
        // expect(button).toHaveAttribute('class', 'button')
        expect(button).toBeInTheDocument()
    })

    test('should call function on button click', async () => {
        const fn = jest.fn()
        render(<Button text="Load more" onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more/i })

        await userEvent.click(button)
        // fireEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)

    })

    test('should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeDisabled()
    })

    test('should be not enabled when disabled is false', () => {
        render(<Button text="Load more" disabled={false} />)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).not.toBeDisabled()
    })
})

// Me diga por que o npm test -- --coverage não está funcionando?

// Me diga por que o npm test -- --coverage --watchAll nao funciona?