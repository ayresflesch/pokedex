import React from 'react'
import PropTypes from "prop-types"

import { EmptyImage } from './styles'

const PokemonImage = ({ url }) => {
  return (
    <>
      {
        url ?
          <img src={url} alt="Pokemon" /> :
          <EmptyImage src={process.env.PUBLIC_URL + '/empty-image.png'} alt="No Image" />
      }
    </>
  )
}

PokemonImage.propTypes = {
  url: PropTypes.string,
}

export default PokemonImage
