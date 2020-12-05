import styled from 'styled-components'
import { useState } from 'react'

const StyledPostalCodeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-top: 0.5rem;
  }
`

export default function PostalCodeForm() {
  const [postalCode, setPostalCode] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {}

  const handleChange = typedPostalCode => {
    if (!typedPostalCode) {
      return
    }
    let regex = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/
    if (regex.test(typedPostalCode)) {
      if (error) {
        setPostalCode(typedPostalCode)
        setError('')
      }
    } else {
      setError('Postal code is invalid')
    }
  }

  return (
    <StyledPostalCodeForm
      onSubmit={handleSubmit}
      data-testid="postal-code-form"
    >
      <label data-testid="form-label">
        Enter your postal code
        <input
          type="text"
          name="postal-code"
          required
          data-testid="postal-code-input"
          onChange={e => handleChange(e.target.value)}
        />
      </label>
      {error ? <div data-testid="postal-code-error">{error}</div> : null}
    </StyledPostalCodeForm>
  )
}
