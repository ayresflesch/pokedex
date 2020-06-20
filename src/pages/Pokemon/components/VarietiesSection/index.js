import React, { useContext } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'
import Varieties from '../Varieties'
import Section from '../../../../components/Section'

import { Container, Header } from './styles'

const VarietiesSection = () => {

  const { pokemonSpecies } = useContext(PokemonContext)

  const pokemonVarieties = () => {
    return pokemonSpecies.varieties.filter(v => !v.is_default)
  }

  return (
    <Container>
      <Header>
        <Section text={"Varieties"} />
      </Header>
      <Varieties varieties={pokemonVarieties()} />
    </Container>
  )
}

export default VarietiesSection
