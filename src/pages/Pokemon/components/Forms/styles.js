import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
  flex-wrap: wrap;

  a { 
    text-decoration: none;
    margin-bottom: 16px;
  }

  @media (max-width: 400px) {
    display: block;
  }
`

export const IconContainer = styled.div`
  align-self: center;
  font-size: 14px;
  color: var(--grey-600);
  line-height: 1;
`