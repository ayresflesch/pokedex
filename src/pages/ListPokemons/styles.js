import styled, { keyframes } from "styled-components"

export const PokemonsContainers = styled.div`
  width: 75vw;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;
  padding: 36px;
`

export const rotate = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

export const LoadingIconContainer = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
  color: var(--grey-700);

  & svg {
    animation-name: ${rotate};
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`

