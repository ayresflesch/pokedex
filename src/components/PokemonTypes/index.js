import React from 'react'
import PropTypes from "prop-types"
import { capitalize } from "../../helpers/stringHelper"

import { TypesContainer, Type } from './styles'

const PokemonTypes = ({ types, alignLeft, marginBottom }) => {

  const typesSortedBySlot = () => {
    return types.sort((a, b) => a.slot - b.slot)
  }

  return (
    <TypesContainer alignLeft={alignLeft} marginBottom={marginBottom} >
      {
        typesSortedBySlot().map((type) => (
          <Type color={type.type.name} key={type.slot}>
            {capitalize(type.type.name)}
          </Type>
        ))
      }
    </TypesContainer>
  )
}

PokemonTypes.propTypes = {
  types: PropTypes.array.isRequired,
  alignLeft: PropTypes.bool,
  marginBottom: PropTypes.string
}

export default PokemonTypes
