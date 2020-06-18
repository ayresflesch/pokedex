import React from 'react'
import PropTypes from 'prop-types'

import { PokemonContainer, Name, Description } from './styles'
import PokemonImage from '../PokemonImage'

const EvolutionDisplay = ({ id, imageUrl, name, evolutionTexts }) => {
  return (
    <PokemonContainer>
      <PokemonImage
        url={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        fallbackUrl={imageUrl} />
      <Name>{name}</Name>
      <Description>
        {
          evolutionTexts && evolutionTexts.map((text, index) => (
            <div key={index}>{text}</div>
          ))
        }

      </Description>
    </PokemonContainer>
  )
}

EvolutionDisplay.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  evolutionTexts: PropTypes.array
}


export default EvolutionDisplay
