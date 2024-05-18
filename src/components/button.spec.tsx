import { render } from '@testing-library/react'
import { Button } from './button'

describe('Button component', async () => {
  it('should render button', () => {
    const { getByText, getByRole } = render(<Button title='Button' />)

    const buttonElement = getByRole('button')
    const buttonTextElement = getByText('Button')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonTextElement).toBeInTheDocument()
  })

  it('should apply the correct width class when size is passed', () => {
    const { getByRole } = render(<Button size={56} title='Button' />)

    const buttonElement = getByRole('button')

    expect(buttonElement).toHaveClass('w-56')
  })
})