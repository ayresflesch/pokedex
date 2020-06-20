import React, { useContext } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'
import EvolutionTree from '../EvolutionTree'
import Section from '../../../../components/Section'

import { Container, Header } from './styles'

const EvolutionTreeSection = () => {

  const { evolutionChain } = useContext(PokemonContext)

  return (
    <Container>
      <Header>
        <Section text={"Evolution"} />
      </Header>
      <EvolutionTree evolutionChain={evolutionChain} />
    </Container>
  )
}

export default EvolutionTreeSection
