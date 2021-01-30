import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: cream;
  height: 50px;
  border-radius: 5px 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  &:hover,
  &:active {
    transform: scale(1.05);
    transition: all 0.3s;
  }
`
export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
