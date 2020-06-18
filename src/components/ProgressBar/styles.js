import styled from "styled-components"

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Label = styled.div`
  color: ${({ theme }) => theme.secondaryText};
`

export const Value = styled.div`
  color: ${({ theme }) => theme.primaryText};
  font-weight: bold;
  font-size: 16px;
`

export const ProgressContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.progressContainer};
  border-radius: 12px;
`

export const Progress = styled.div`
  background: var(--blue-600);
  height: 8px;
  width: ${({ percentage }) => percentage}%;
  border-radius: 12px;
`
