import styled from "styled-components"

export const PokemonContainer = styled.div`
  margin: 24px auto;
  padding: 0 24px;
  max-width: 1224px;

  display: grid;
  grid-gap: 24px;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-areas:
      "profile stats . "
      "profile evolution evolution"
      "profile varieties varieties";

  @media (max-width: 860px) {
    grid-template-columns: 300px 1fr;
    grid-template-areas:
        "profile stats"
        "profile varieties"
        "evolution evolution";
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas: "profile"
                          "stats"
                          "evolution"
                          "varieties";
  }
`