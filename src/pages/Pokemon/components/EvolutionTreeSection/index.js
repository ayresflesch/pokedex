import React, { useContext } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'
import EvolutionTree from '../EvolutionTree'
import Section from '../../../../components/Section'

import { Container } from './styles'

const EvolutionTreeSection = () => {

  const { evolutionChain } = useContext(PokemonContext)

  return (
    <Container>
      <Section text={"Evolution"} />
      <EvolutionTree evolutionChain={evolutionChain} />
    </Container>
  )
}

export default EvolutionTreeSection
