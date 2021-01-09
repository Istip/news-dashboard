import styled from "styled-components"

// STYLED COMPONENTS BUTTON, WITH NESTED HOVER EFFECT & FOCUS
export const LoginButton = styled.button`
  background: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  color: #fff;
  transition: 200ms ease;
  outline: none;
  min-width: 5rem;

  &:hover {
    background: #fff;
    border: 1px solid #dc3545;
    color: #dc3545;
  }

  /* CLEAR BLACK BORDER WHEN THE BUTTON IS FOCUSED */
  &:focus {
    outline: none;
  }
`

// THIS COMPONENT RETURNS A <LoginButton> {CHILDREN} </LoginButton> COMPONENT
// EVERYTHING ENTERED AS THE {CHILDREN} WILL BE THE TEXT DISPLAYED IN THE BUTTON COMPONENT
