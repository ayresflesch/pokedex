import styled from "styled-components"

export const CardContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.25);
  }
`

export const Number = styled.span`
  color: var(--grey-500);
`

export const ImageContainer = styled.div`
  height: 99px;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--grey-800);
  margin-bottom: 16px;
`

export const TypesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
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
