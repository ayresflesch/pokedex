import React, { useContext } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'

import {
  Title,
  Number,
  ProfileContainer,
  ImageContainer,
  DescriptionContainer,
  Genera,
  HeightWeightContainer,
  Height,
  HeightWeightLabel
} from "./styles"

import { capitalize } from '../../../../helpers/stringHelper'
import PokemonTypes from '../../../../components/PokemonTypes'
import PokemonImage from '../../../../components/PokemonImage'

const Profile = () => {

  const { pokemon, pokemonSpecies } = useContext(PokemonContext)

  const genera = () => {
    return pokemonSpecies.genera.find(genus => genus.language.name === 'en').genus
  }

  const height = () => {
    const height = pokemon.height / 10

    return new Intl.NumberFormat("pt-BR", {
      style: 'unit',
      unit: "meter"
    }).format(height)
  }

  const weight = () => {
    const weight = pokemon.weight / 10

    return new Intl.NumberFormat("pt-BR", {
      style: 'unit',
      unit: "kilogram"
    }).format(weight)
  }

  return (
    <ProfileContainer>
      <ImageContainer>
        <PokemonImage url={pokemon.sprites.front_default} />
      </ImageContainer>

      <DescriptionContainer>
        <Title>
          <span>
            {capitalize(pokemon.name)}&nbsp;
                        </span>
          <Number>#{pokemon.id}</Number>
        </Title>
        <Genera>
          {genera()}
        </Genera>
        <PokemonTypes
          alignLeft
          marginBottom={'8px'}
          types={pokemon.types} />
        <HeightWeightContainer>
          <Height>
            <HeightWeightLabel>Height: </HeightWeightLabel>
            {height()}
          </Height>
          <div>
            <HeightWeightLabel>Weight: </HeightWeightLabel>
            {weight()}
          </div>
        </HeightWeightContainer>
      </DescriptionContainer>
    </ProfileContainer>
  )
}

export default Profile
