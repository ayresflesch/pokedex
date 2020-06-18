import styled from "styled-components"

export const PokemonContainer = styled.div`
  margin: 24px auto;
  max-width: 1200px;

  display: grid;
  grid-gap: 24px;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
      "profile stats varieties"
      "profile evolution evolution";
`