import styled from "styled-components"

export const EvolutionRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;

  a { 
    text-decoration: none;
  }

  @media (max-width: 600px) {
    display: block;
    &:not(:last-child) { 
      border-bottom: 1px solid var(--grey-300);
      padding-bottom: 16px;
      margin-bottom: 0;
    }
  }
`

export const IconContainer = styled.div`
  align-self: center;
  font-size: 20px;
  color: var(--grey-600);
  line-height: 1;

  @media (max-width: 600px) {
    display: flex;
    margin: 4px 0;
    justify-content: center;

    svg {
      transform: rotate(90deg);
    }
  }
`