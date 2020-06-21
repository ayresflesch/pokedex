import React from 'react'
import PropTypes from "prop-types"
import {
  PokemonContainer
} from "./styles"

import Profile from './components/Profile'
import FormsSection from './components/FormsSection'
import EvolutionTreeSection from './components/EvolutionTreeSection'
import PokemonProvider from './provider/PokemonProvider'
import Header from '../../components/Header'
import Stats from './components/Stats'

const Pokemon = ({ match: { params } }) => {
  return (
    <PokemonProvider pokemonId={params.id}>
      <Header />
      <PokemonContainer>
        <Profile />
        <Stats />
        <FormsSection />
        <EvolutionTreeSection />
      </PokemonContainer>
    </PokemonProvider>
  )
}

Pokemon.propTypes = {
  match: PropTypes.object,
}

export default Pokemon
