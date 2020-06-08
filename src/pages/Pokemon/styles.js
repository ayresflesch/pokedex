import styled from "styled-components"

export const PokemonContainer = styled.div`
  min-height: 50vh;
  width: 50vw;
  border-radius: 10px;
  background: ${({ theme }) => theme.cardBgColor};

  margin: 0 auto;
  margin-top: 36px;
  padding: 24px; 
  
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);

  @media (max-width: 992px) {
    width: 95vw;
  }
`