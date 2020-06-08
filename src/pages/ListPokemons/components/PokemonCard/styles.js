import styled from "styled-components"

export const CardContainer = styled.div`
  min-height: 176px; 
  background: ${({ theme }) => theme.cardBgColor};
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.25);
    background: ${({ theme }) => theme.cardBgColorHover};
  }

  a { 
    text-decoration: none;
  }
`

export const Number = styled.span`
  color: var(--grey-500);
  margin-bottom: 16px
`

export const ImageContainer = styled.div`
  min-height: 99px;
  flex: 1;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 16px;
`

export const LoadingIconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
