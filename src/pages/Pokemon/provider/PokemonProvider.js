import React from 'react'
import PropTypes from "prop-types"
import { usePokemon } from '../hooks/usePokemon'
import { usePokemonSpecies } from '../hooks/usePokemonSpecies'
import { useEvolutionChain } from '../hooks/useEvolutionChain'

export const PokemonContext = React.createContext()

const PokemonProvider = ({ pokemonId, children }) => {
  const pokemon = usePokemon(pokemonId)
  const pokemonSpecies = usePokemonSpecies(pokemon)
  const evolutionChain = useEvolutionChain(pokemonSpecies)

  return (
    <>
      {
        pokemon && pokemonSpecies && evolutionChain &&
        <PokemonContext.Provider value={{ pokemon, pokemonSpecies, evolutionChain }}>
          {children}
        </PokemonContext.Provider>
      }
    </>
  )
}

PokemonProvider.propTypes = {
  pokemonId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PokemonProvider
