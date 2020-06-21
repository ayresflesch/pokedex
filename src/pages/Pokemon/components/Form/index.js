import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EvolutionDisplay from '../../../../components/EvolutionDisplay'
import { capitalize } from '../../../../helpers/stringHelper'

const Form = ({ form }) => {

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(form.url)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [form])

  return (
    <>
      {
        pokemon &&
        <EvolutionDisplay
          pokemon={pokemon}
          name={capitalize(pokemon.name)}
        />
      }
    </>

  )
}

Form.propTypes = {
  form: PropTypes.object.isRequired,
}

export default Form
