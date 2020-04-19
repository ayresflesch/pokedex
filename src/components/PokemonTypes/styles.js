import styled from "styled-components"

export const TypesContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: ${props => props.alignLeft ? 'left' : "center"};
`

const typesColor = {
  bug: "#6D7815",
  dark: "#49392F",
  dragon: "#4924A1",
  electric: "#A1871F",
  fairy: "#9B6470",
  fighting: "#7D1F1A",
  fire: "#9C531F",
  flying: "#6D5E9C",
  ghost: "#493963",
  grass: "#4E8234",
  ground: "#927D44",
  ice: "#638D8D",
  normal: "#6D6D4E",
  poison: "#682A68",
  psychic: "#A13959",
  steel: "#787887",
  water: "#445E9C",
  unknown: "#44685E",
}

export const Type = styled.div`
  color: white;
  padding: 4px 8px;
  border-radius: 5px;
  font-weight: 500;
  background: ${({ color }) => typesColor[color] || typesColor["unknown"]};
  flex: 1;
  max-width: 70px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`