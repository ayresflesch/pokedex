import styled from "styled-components"

export const ProgressBarContainer = styled.div`
  background: ${({ theme }) => theme.cardBgColor};
  padding: 16px;
  border-radius: 10px;
  grid-area: stats;

  & > div:not(:last-child) {
    margin-bottom: 8px; 
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 24px;
`

export const StatsFilterContainer = styled.div`
  display: flex;
  border-radius: 20px;
  align-items: center;
  padding: 3px;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.progressContainer};
`

export const StatsFilter = styled.div`
  color: ${({ theme }) => theme.primaryText};

  & input:checked + label {
    background-color: var(--blue-700);
    color: var(--grey-200);
  }

  & label {
    font-weight: bold;
    display: block;
    padding: 6px 12px;
    border-radius: 20px;
  }

  & input {
    display: none;
  }
`