import styled from 'styled-components'

const StyledButton = styled.button`
  color: #fff;
  background: #3283ca;
  padding: 0.6rem;
  border-radius: 40%;
  border: 2px solid black;
  transition: all 0.4s ease 0s;
  margin: 0.8rem 0;
  &:disabled {
    background: grey;
  }
`
export default function Button({ children, onClick, disabled }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
