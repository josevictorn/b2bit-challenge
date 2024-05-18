import { render, screen } from '@testing-library/react'
import { Input, InputProps } from './input'
import { Formik, Form } from 'formik'

describe('Input component', () => {
  const renderInput = (props: InputProps) => {
    return render(
      <Formik initialValues={{ test: '' }} onSubmit={() => {}}>
        <Form>
          <Input name="test" {...props} />
        </Form>
      </Formik>
    )
  }

  it('should render the input component', () => {
    renderInput({ placeholder: 'Enter text' })
    
    const inputElement = screen.getByPlaceholderText('Enter text')
    expect(inputElement).toBeInTheDocument()
  })
  
  it('should accept a type prop', () => {
    renderInput({ type: 'checkbox' })
    
    const inputElement = screen.getByRole('checkbox')
    expect(inputElement).toHaveAttribute('type', 'checkbox')
  })

  it('should accept a value prop and display it', () => {
    renderInput({ value: 'test value', readOnly: true })
    
    const inputElement = screen.getByDisplayValue('test value')
    expect(inputElement).toBeInTheDocument()
  })
})
