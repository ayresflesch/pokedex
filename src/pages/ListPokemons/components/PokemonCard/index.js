import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import {
  CardContainer,
  Title,
  TypesContainer,
  Type,
  Number,
  ImageContainer,
} from "./styles"

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const fetchPokemon = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPokemon(data))
    }
    fetchPokemon()
  }, [url])

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1)
  }

  const typesSortedBySlot = () => {
    return pokemon.types.sort((a, b) => a.slot - b.slot)
  }

  return (
    <>
      {pokemon && (
        <CardContainer>
          <Number>#{pokemon.id}</Number>
          <ImageContainer>
            <img src={pokemon.sprites.front_default} alt="Pokemon" />
          </ImageContainer>
          <Title>{capitalize(pokemon.name)}</Title>
          <TypesContainer>
            {
              typesSortedBySlot().map((type) => (
                <Type color={type.type.name} key={type.slot}>
                  {capitalize(type.type.name)}
                </Type>
              ))
            }
          </TypesContainer>
        </CardContainer>
      )}
    </>
  )
}

PokemonCard.propTypes = {
  url: PropTypes.string.isRequired,
}

export default PokemonCard
