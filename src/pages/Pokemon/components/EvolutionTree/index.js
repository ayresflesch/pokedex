import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

import Evolution from '../Evolution'
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
                  <Link to={`/pokemon/${pokemon.getId()}`}>
                    <Evolution pokemonEvolutionNode={pokemon} />
                  </Link>
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
