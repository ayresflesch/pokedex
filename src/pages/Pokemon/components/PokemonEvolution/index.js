import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"

import { capitalize } from "../../../../helpers/stringHelper"

import { PokemonContainer, Name, Description } from './styles'

const PokemonEvolution = ({ pokemonEvolutionNode }) => {

  const [pokemonSpecies, setPokemonSpecies] = useState(null)
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(pokemonEvolutionNode.url)
      .then((response) => response.json())
      .then(pokemonSpecies => {
        setPokemonSpecies(pokemonSpecies)
      })
  }, [pokemonEvolutionNode])

  useEffect(() => {
    if (!pokemonSpecies) {
      return
    }

    const defaultVariety = pokemonSpecies.varieties.find(variety => variety.is_default)

    fetch(defaultVariety.pokemon.url)
      .then((response) => response.json())
      .then(pokemon => {
        setPokemon(pokemon)
      })
  }, [pokemonSpecies])

  const pokemonsSpeciesName = () => {
    return pokemonSpecies.names.find(name => name.language.name === 'en').name
  }

  return (
    <PokemonContainer>
      {
        pokemon &&
        <>
          <div>
            {
              pokemon.sprites.front_default &&
              <img src={pokemon.sprites.front_default} alt="Pokemon" />
            }
          </div>
          <Name>
            {pokemonsSpeciesName()}
          </Name>
          <Description>
            {
              pokemonEvolutionNode.minLevel &&
              <span>
                {capitalize(pokemonEvolutionNode.evolvesFrom)} reaches level {pokemonEvolutionNode.minLevel}
              </span>
            }
          </Description>
        </>
      }
    </PokemonContainer>
  )
}

PokemonEvolution.propTypes = {
  pokemonEvolutionNode: PropTypes.object.isRequired,
}

export default PokemonEvolution
