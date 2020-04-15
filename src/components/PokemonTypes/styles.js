import styled from "styled-components"

export const TypesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  text-align: center;
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
  grid-column: span 2;

  &:nth-last-child(1):nth-child(odd) {
    grid-column: 2 / span 2;
  }
`