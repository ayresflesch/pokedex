import React from 'react'
import PropTypes from "prop-types"
import {
  PokemonContainer,
  ProfileContainer,
  GeneralDataContainer,
  StatVarietyContainer
} from "./styles"

import Profile from './components/Profile'
import VarietiesSection from './components/VarietiesSection'
import EvolutionTreeSection from './components/EvolutionTreeSection'
import PokemonProvider from './provider/PokemonProvider'
import Header from '../../components/Header'
import Stats from './components/Stats'

const Pokemon = ({ match: { params } }) => {
  return (
    <PokemonProvider pokemonId={params.id}>
      <Header />
      <PokemonContainer>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>

        <GeneralDataContainer>
          <StatVarietyContainer>
            <Stats />
            <VarietiesSection />
          </StatVarietyContainer>
          <EvolutionTreeSection />
        </GeneralDataContainer>
      </PokemonContainer>
    </PokemonProvider>
  )
}

Pokemon.propTypes = {
  match: PropTypes.object,
}

export default Pokemon
