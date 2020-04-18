import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { IoIosArrowForward } from "react-icons/io"
import PokemonEvolution from '../PokemonEvolution'

import { EvolutionRow, IconContainer } from './styles'

const isLastPokemon = (index, chain) => {
  return index !== chain.length - 1
}

const EvolutionTree = ({ evolutionChain }) => {
  return (
    <>
      {
        evolutionChain &&
        evolutionChain.map((chain, index) => (
          <EvolutionRow key={index}>
            {
              chain.map((pokemon, index) => (
                <Fragment key={index}>
                  <PokemonEvolution pokemonEvolutionNode={pokemon} />
                  {
                    isLastPokemon(index, chain) &&
                    <IconContainer>
                      <IoIosArrowForward />
                    </IconContainer>
                  }
                </Fragment>
              ))
            }
          </EvolutionRow>
        ))
      }
    </>
  )
}

EvolutionTree.propTypes = {
  evolutionChain: PropTypes.array.isRequired,
}

export default EvolutionTree
