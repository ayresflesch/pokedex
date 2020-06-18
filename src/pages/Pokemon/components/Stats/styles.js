import styled from "styled-components"

export const ProgressBarContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.cardBgColor};
  padding: 16px;
  border-radius: 10px;
  grid-area: stats;

  & > div:not(:last-child) {
    margin-bottom: 8px; 
  }
`