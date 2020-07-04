import React, { useContext, useEffect } from 'react'
import { PokemonContext } from '../../provider/PokemonProvider'

import {
  Title,
  Number,
  ProfileContainer,
  ImageContainer,
  DescriptionContainer,
  Genera,
  Characteristics,
  Characteristic,
  CharacteristicsLabel
} from "./styles"

import { capitalize } from '../../../../helpers/stringHelper'
import PokemonTypes from '../../../../components/PokemonTypes'
import PokemonImage from '../../../../components/PokemonImage'
import animateScrollTo from 'animated-scroll-to'
import { numberFormatted, metresToInchesString } from '../../../../helpers/numberHelper'

const Profile = () => {

  const { pokemon, pokemonSpecies } = useContext(PokemonContext)

  useEffect(() => {
    animateScrollTo(0, { minDuration: 1000 })
  }, [pokemon])

  const genera = () => {
    return pokemonSpecies.genera.find(genus => genus.language.name === 'en').genus
  }

  const height = () => {
    const heightInMetres = pokemon.height / 10
    const heightInMetresFormatted = numberFormatted(heightInMetres)
    const heightInInches = metresToInchesString(heightInMetres)

    return `${heightInMetresFormatted} m ( ${heightInInches} )`
  }

  const weight = () => {
    const weightInKg = pokemon.weight / 10
    const weightInKgFormatted = numberFormatted(weightInKg)
    const weightInLbsFormatted = numberFormatted(weightInKg * 2.205)

    return `${weightInKgFormatted} kg ( ${weightInLbsFormatted} lbs. )`
  }

  const abilities = () =>
    pokemon.abilities.map(a =>
      `${capitalize(a.ability.name)}${a.is_hidden ? ' (hidden)' : ''}`
    ).join(', ')

  return (
    <ProfileContainer>
      <ImageContainer>
        <PokemonImage
          url={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          fallbackUrl={pokemon.sprites.front_default} />
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
          marginBottom={'8px'}
          types={pokemon.types} />
      </DescriptionContainer>
      <Characteristics>
        <Characteristic>
          <CharacteristicsLabel>Height: </CharacteristicsLabel>
          {height()}
        </Characteristic>
        <Characteristic>
          <CharacteristicsLabel>Weight: </CharacteristicsLabel>
          {weight()}
        </Characteristic>
        <Characteristic>
          <CharacteristicsLabel>Abilitites: </CharacteristicsLabel>
          {abilities()}
        </Characteristic>
      </Characteristics>
    </ProfileContainer>
  )
}

export default Profile
