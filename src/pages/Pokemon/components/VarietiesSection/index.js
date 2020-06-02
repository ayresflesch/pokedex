import React, { useContext } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'
import Varieties from '../Varieties'
import Section from '../../../../components/Section'

const VarietiesSection = () => {

  const { pokemonSpecies } = useContext(PokemonContext)

  const pokemonVarieties = () => {
    return pokemonSpecies.varieties.filter(v => !v.is_default)
  }

  return (
    <>
      <Section text={"Varieties"} />
      <Varieties varieties={pokemonVarieties()} />
    </>
  )
}

export default VarietiesSection
