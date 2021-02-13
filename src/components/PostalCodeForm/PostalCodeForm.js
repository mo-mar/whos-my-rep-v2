import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Button from '../Button/Button'

const StyledPostalCodeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin-top: 0.5rem;
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    border: 1px solid black;
    transition: border 0.3s ease;
    font-size: 1rem;
    text-align: center;
  }
  Button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #3283ca;
    padding: 1rem;
    border-radius: 30px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
    margin: 0.8rem 0;
  }

  @media (min-width: 800px) {
    grid-row: 2;
    grid-column: 1;
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
        Enter your postal code below:
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
      <Button data-testid="submit" disabled={!postalCodeIsValid} type="submit">
        Submit
      </Button>
      {error ? <div data-testid="postal-code-error">{error}</div> : null}
    </StyledPostalCodeForm>
  )
}
