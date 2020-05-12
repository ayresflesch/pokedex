import styled from "styled-components"

export const PokemonContainer = styled.div`
  text-align: center;
`

export const Name = styled.div`
  font-weight: 500;
  color: var(--grey-800);
`

export const Description = styled.div`
  color: var(--grey-700);
  max-width: 250px;

  @media (max-width: 600px) {
    max-width: initial;
  }
`