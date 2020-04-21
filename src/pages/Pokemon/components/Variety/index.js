import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EvolutionDisplay from '../../../../components/EvolutionDisplay'
import { capitalize } from '../../../../helpers/stringHelper'

const Variety = ({ variety }) => {

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(variety.url)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [variety])

  return (
    <>
      {
        pokemon &&
        <EvolutionDisplay
          imageUrl={pokemon.sprites.front_default}
          name={capitalize(pokemon.name)}
        />
      }
    </>

  )
}

Variety.propTypes = {
  variety: PropTypes.object.isRequired,
}

export default Variety
