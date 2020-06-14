import React from 'react'
import PropTypes from "prop-types"
import { capitalize } from "../../helpers/stringHelper"

import { TypesContainer, Type } from './styles'

const PokemonTypes = ({ types, marginBottom }) => {

  const typesSortedBySlot = () => {
    return types.sort((a, b) => a.slot - b.slot)
  }

  return (
    <TypesContainer marginBottom={marginBottom} >
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
  marginBottom: PropTypes.string
}

export default PokemonTypes
