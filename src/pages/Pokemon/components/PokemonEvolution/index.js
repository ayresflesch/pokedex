import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"

import { PokemonContainer, Name, Description } from './styles'
import PokemonEvolvesTo from '../../../../dataObjects/PokemonEvolvesTo'

const PokemonEvolution = ({ pokemonEvolutionNode }) => {

  const [pokemonSpecies, setPokemonSpecies] = useState(null)
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(pokemonEvolutionNode.getUrl())
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
              pokemonEvolutionNode.getEvolutionTexts().map((text, index) => (
                <div key={index}>{text}</div>
              ))
            }

          </Description>
        </>
      }
    </PokemonContainer>
  )
}

PokemonEvolution.propTypes = {
  pokemonEvolutionNode: PropTypes.instanceOf(PokemonEvolvesTo).isRequired,
}

export default PokemonEvolution
