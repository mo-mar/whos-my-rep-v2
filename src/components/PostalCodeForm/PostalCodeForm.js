import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { getRepresentatives } from '../../Utils/APIRequests'

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

export default function PostalCodeForm({ handleSubmit }) {
  const [postalCode, setPostalCode] = useState('')
  const [postalCodeIsValid, setPostalCodeIsValid] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!postalCode) {
      return
    }
    const validatePostalCode = () => {
      let regex = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/
      if (regex.test(postalCode)) {
        setPostalCodeIsValid(true)
        setError('')
        return
      } else {
        setError('Postal code is invalid')
        return
      }
    }
    validatePostalCode()
  }, [postalCode])

  return (
    <StyledPostalCodeForm
      onSubmit={e => handleSubmit(e, postalCode)}
      data-testid="postal-code-form"
    >
      <label data-testid="form-label">
        Enter your postal code
        <input
          type="text"
          name="postal-code"
          value={postalCode}
          required
          data-testid="postal-code-input"
          onChange={e =>
            setPostalCode(e.target.value.toUpperCase().replace(/\s/g, ''))
          }
        />
      </label>
      <button
        data-testid="submit-button"
        disabled={!postalCodeIsValid}
        type="submit"
      >
        Submit
      </button>
      {error ? <div data-testid="postal-code-error">{error}</div> : null}
    </StyledPostalCodeForm>
  )
}
