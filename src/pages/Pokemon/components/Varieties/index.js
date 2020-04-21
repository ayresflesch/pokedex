import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { GoPrimitiveDot } from "react-icons/go"

import { VarietiesRow } from "./styles"

import Variety from '../Variety'
import { IconContainer } from '../EvolutionTree/styles'

const Varieties = ({ varieties }) => {

  const isLastPokemon = (index, varieties) => {
    return index !== varieties.length - 1
  }

  return (
    <>
      <VarietiesRow>
        {
          varieties.map((v, index) => (
            <Fragment key={index}>
              <Variety variety={v.pokemon} />
              {
                isLastPokemon(index, varieties) &&
                <IconContainer>
                  <GoPrimitiveDot />
                </IconContainer>
              }

            </Fragment>
          ))

        }
      </VarietiesRow>
    </>
  )
}

Varieties.propTypes = {
  varieties: PropTypes.array,
}

export default Varieties
