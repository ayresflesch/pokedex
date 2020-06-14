import React from 'react'
import PropTypes from "prop-types"

import { EmptyImage } from './styles'

const PokemonImage = ({ url, fallbackUrl }) => {
  return (
    <>
      {
        fallbackUrl ?
          <object style={{ width: '96px' }} data={url} type="image/png">
            <img src={fallbackUrl} alt="Pokemon" />
          </object> :
          <EmptyImage src={process.env.PUBLIC_URL + '/empty-image.png'} alt="No Image" />
      }
    </>
  )
}

PokemonImage.propTypes = {
  url: PropTypes.string,
  fallbackUrl: PropTypes.string,
}

export default PokemonImage
