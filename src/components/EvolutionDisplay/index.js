import React from 'react'
import PropTypes from 'prop-types'

import { PokemonContainer, Name, Description } from './styles'
import PokemonImage from '../PokemonImage'

const EvolutionDisplay = ({ pokemon, name, evolutionTexts }) => {

  return (
    <PokemonContainer>
      <PokemonImage
        url={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        fallbackUrl={pokemon.sprites.front_default} />
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
  pokemon: PropTypes.object,
  name: PropTypes.string.isRequired,
  evolutionTexts: PropTypes.array
}


export default EvolutionDisplay
