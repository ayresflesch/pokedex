import styled from "styled-components"

export const PokemonContainer = styled.div`
  text-align: center;
`

export const Name = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
`

export const Description = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  max-width: 250px;

  @media (max-width: 600px) {
    max-width: initial;
  }
`