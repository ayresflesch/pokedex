import React from 'react'
import PropTypes from "prop-types"
import { PokemonContainer, } from "./styles"

import Profile from './components/Profile'
import GraphSection from './components/GraphSection'
import VarietiesSection from './components/VarietiesSection'
import EvolutionTreeSection from './components/EvolutionTreeSection'
import PokemonProvider from './provider/PokemonProvider'

const Pokemon = ({ match: { params } }) => {
  return (
    <PokemonProvider pokemonId={params.id}>
      <PokemonContainer>
        <Profile />
        <GraphSection />
        <EvolutionTreeSection />
        <VarietiesSection />
      </PokemonContainer>
    </PokemonProvider>
  )
}

Pokemon.propTypes = {
  match: PropTypes.object,
}

export default Pokemon
