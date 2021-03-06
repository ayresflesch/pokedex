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
  grid-area: profile;
`

export const DescriptionContainer = styled.div`
  margin-bottom: 24px;

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
`

export const Characteristics = styled.div`
  color: ${({ theme }) => theme.primaryText};
  text-align: left;
  font-size: 16px;
`

export const Characteristic = styled.div`
  margin-bottom: 16px;
`

export const CharacteristicsLabel = styled.div`
  color: ${({ theme }) => theme.primaryText};
  font-weight: bold;
  margin-bottom: 4px;
`


