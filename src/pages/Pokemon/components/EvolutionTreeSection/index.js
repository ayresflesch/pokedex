import React, { useContext } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'
import EvolutionTree from '../EvolutionTree'
import Section from '../../../../components/Section'

const EvolutionTreeSection = () => {

  const { evolutionChain } = useContext(PokemonContext)

  return (
    <>
      <Section text={"Evolution"} />
      <EvolutionTree evolutionChain={evolutionChain} />
    </>
  )
}

export default EvolutionTreeSection
