import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.cardBgColor};
  padding: 16px;
  border-radius: 10px;
  grid-area: evolution;
`

export const Header = styled.header`
  margin-bottom: 24px;
`