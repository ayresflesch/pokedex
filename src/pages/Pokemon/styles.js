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
  font-size: 36px;
  font-weight: 500;
  color: var(--grey-800);
  text-align: center;
  line-height: 1;
  margin-bottom: 4px;
`

export const Number = styled.span`
  color: var(--grey-600);
  font-size: 24px;
`

export const Genera = styled.div`
  font-size: 18px;
  color: var(--grey-600);
  margin-bottom: 8px;
`

export const ProfileContainer = styled.div`
  display: flex;
  // align-items: center;
  margin-bottom: 36px;
`
export const Profile = styled.div`
  flex: 1;
  display: flex;
`

export const ImageContainer = styled.div`
    padding: 16px;
    box-shadow: inset 0 0px 2px 1px rgb(0, 0, 0, 0.15);
    border-radius: 100%;
    margin-right: 16px;
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