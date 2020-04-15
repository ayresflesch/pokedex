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
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: var(--grey-800);
  text-align: center;
  margin-bottom: 4px;
`

export const Number = styled.span`
  color: var(--grey-600);
  font-size: 18px;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`
export const Profile = styled.div`
  flex: 1;
`

export const ImageContainer = styled.div`
  text-align: center;
`
export const GraphContainer = styled.div`
  flex: 2;
  height: 230px;
`

export const Section = styled.div`
  font-weight: 500;
  color: var(--grey-700);
  font-size: 20px;
`