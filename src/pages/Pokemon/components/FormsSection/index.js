import React, { useContext } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'
import Forms from '../Forms'
import Section from '../../../../components/Section'

import { Container, Header } from './styles'

const FormsSection = () => {

  const { pokemonSpecies } = useContext(PokemonContext)

  const pokemonVarieties = () => {
    return pokemonSpecies.varieties.filter(v => !v.is_default)
  }

  return (
    <Container>
      <Header>
        <Section text={"Forms"} />
      </Header>
      <Forms forms={pokemonVarieties()} />
    </Container>
  )
}

export default FormsSection
