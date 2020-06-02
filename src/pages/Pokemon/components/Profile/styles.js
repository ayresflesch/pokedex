import styled from "styled-components"

export const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: var(--grey-800);
  line-height: 1;
  margin-bottom: 4px;
  
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export const Number = styled.span`
  color: var(--grey-600);
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Genera = styled.div`
  font-size: 18px;
  color: var(--grey-600);
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  margin-bottom: 36px;

  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
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
  box-shadow: inset 0 0px 2px 1px rgb(0, 0, 0, 0.15);
  align-self: center;
  border-radius: 100%;
  margin-right: 16px;
  
  @media (max-width: 600px) {
    margin-right: 0px;
    margin-bottom: 16px;
  }
`

export const HeightWeightContainer = styled.div`
  display: flex;
  color: var(--grey-800);
`

export const HeightWeightLabel = styled.span`
  color: var(--grey-600);
`

export const Height = styled.div`
  margin-right: 16px;
`

