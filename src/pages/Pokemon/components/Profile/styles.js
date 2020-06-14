import styled from "styled-components"

export const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryText};
  line-height: 1;
  margin-bottom: 4px;
  
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export const Number = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Genera = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme.cardBgColor};
  padding: 16px;
  text-align: center;
  border-radius: 10px;
  width: 300px;
`

export const DescriptionContainer = styled.div`
  @media (max-width: 600px) {
    & div {
      text-align: center;
      justify-content: center;
    }
  }
`

export const ImageContainer = styled.div`
  padding: 16px;
  align-self: center;
  border-radius: 100%;
  
  @media (max-width: 600px) {
    margin-right: 0px;
    margin-bottom: 16px;
  }
`

export const HeightWeightContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.primaryText};
`

export const HeightWeightLabel = styled.span`
  color: ${({ theme }) => theme.secondaryText};
`

export const Height = styled.div`
  margin-right: 16px;
`

