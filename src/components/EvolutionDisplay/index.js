import React from 'react'
import PropTypes from 'prop-types'

import { PokemonContainer, Name, Description } from './styles'

const EvolutionDisplay = ({ imageUrl, name, evolutionTexts }) => {
  return (
    <PokemonContainer>
      <div>
        {
          imageUrl &&
          <img src={imageUrl} alt="Pokemon" />
        }
      </div>
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
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  evolutionTexts: PropTypes.array
}


export default EvolutionDisplay
