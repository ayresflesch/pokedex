import React, { useState, useEffect } from "react"
import LoadingIcon from "../../../../components/LoadingIcon"
import { capitalize } from "../../../../helpers/stringHelper"
import PropTypes from "prop-types"

import {
  CardContainer,
  Title,
  TypesContainer,
  Type,
  Number,
  ImageContainer,
  LoadingIconContainer
} from "./styles"

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [url])

  const typesSortedBySlot = () => {
    return pokemon.types.sort((a, b) => a.slot - b.slot)
  }

  return (
    <>
      <CardContainer>
        {
          pokemon ?
            <>
              <Number>#{pokemon.id}</Number>
              <ImageContainer>
                {
                  pokemon.sprites.front_default &&
                  <img src={pokemon.sprites.front_default} alt="Pokemon" />
                }
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
            </> :
            <LoadingIconContainer>
              <LoadingIcon />
            </LoadingIconContainer>

        }
      </CardContainer>
    </>
  )
}

PokemonCard.propTypes = {
  url: PropTypes.string.isRequired,
}

export default PokemonCard
