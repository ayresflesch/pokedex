import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import LoadingIcon from "../../../../components/LoadingIcon"
import { capitalize } from "../../../../helpers/stringHelper"

import {
  CardContainer,
  Title,
  Number,
  ImageContainer,
  LoadingIconContainer
} from "./styles"
import PokemonTypes from "../../../../components/PokemonTypes"
import PokemonImage from "../../../../components/PokemonImage"

const PokemonCard = ({ url }) => {

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [url])

  return (
    <>
      <CardContainer>
        {
          pokemon ?
            <Link to={`/pokemon/${pokemon.id}`}>
              <Number>#{pokemon.id}</Number>
              <ImageContainer>
                <PokemonImage url={pokemon.sprites.front_default} />
              </ImageContainer>
              <Title>{capitalize(pokemon.name)}</Title>
              <PokemonTypes types={pokemon.types} />
            </Link>
            :
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
