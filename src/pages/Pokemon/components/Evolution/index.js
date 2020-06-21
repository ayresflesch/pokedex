import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"

import PokemonEvolvesTo from '../../../../dataObjects/PokemonEvolvesTo'
import EvolutionDisplay from '../../../../components/EvolutionDisplay'

const Evolution = ({ pokemonEvolutionNode }) => {

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
    <>
      {
        pokemon &&
        <EvolutionDisplay
          pokemon={pokemon}
          name={pokemonsSpeciesName()}
          evolutionTexts={pokemonEvolutionNode.getEvolutionTexts()}
        />
      }
    </>
  )
}

Evolution.propTypes = {
  pokemonEvolutionNode: PropTypes.instanceOf(PokemonEvolvesTo).isRequired,
}

export default Evolution
