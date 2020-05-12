import styled from "styled-components"

export const PokemonContainer = styled.div`
  min-height: 50vh;
  width: 50vw;
  border-radius: 10px;
  background: #fff;

  margin: 0 auto;
  margin-top: 36px;
  padding: 24px; 
  
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);

  @media (max-width: 992px) {
    width: 95vw;
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
  }
`
export const Profile = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
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
export const GraphContainer = styled.div`
  height: 200px;
  max-width: 370px;
  margin-bottom: 24px;
`

export const Section = styled.div`
  font-weight: 500;
  color: var(--grey-700);
  font-size: 20px;
  margin-bottom: 24px;
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