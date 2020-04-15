import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"

import StatsRadar from "./components/StatsRadar"

import { capitalize } from "../../helpers/stringHelper"
import {
  PokemonContainer,
  Title,
  Number,
  ProfileContainer,
  ImageContainer,
  GraphContainer,
  Profile,
  Section
} from "./styles"
import PokemonTypes from '../../components/PokemonTypes'
import EvolutionTree from './components/EvolutionTree'

const Pokemon = ({ match: { params } }) => {

  const [pokemon, setPokemon] = useState(null)
  const [evolutionChainUrl, setEvolutionChainUrl] = useState(null)
  const [evolutionChain, setEvolutionChain] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [])

  useEffect(() => {
    if (!pokemon) {
      return
    }

    fetch(pokemon.species.url)
      .then((response) => response.json())
      .then(({ evolution_chain: { url } }) => setEvolutionChainUrl(url))

  }, [pokemon])

  useEffect(() => {
    if (!evolutionChainUrl) {
      return
    }

    fetch(evolutionChainUrl)
      .then((response) => response.json())
      .then(({ chain }) => {
        const evolutionChain = traverseEvolutionChain(chain)
        setEvolutionChain(evolutionChain)
      })

  }, [evolutionChainUrl])


  const traverseEvolutionChain = evolutionChain => {

    const { evolution_details, evolves_to, evolvesFrom, species: { name, url } } = evolutionChain

    const evolutionChainFormatted = { name, url, evolvesTo: evolves_to, evolvesFrom }

    evolution_details.forEach(detail => {
      if (detail.trigger.name === 'level-up') {
        evolutionChainFormatted.trigger = detail.trigger.name
        evolutionChainFormatted.minLevel = detail.min_level
      }
    })

    const onlyLastEvolution = (
      evolutionChainFormatted.evolvesTo.length ?
        [] :
        [[evolutionChainFormatted]]
    )

    return onlyLastEvolution.concat(
      ...evolutionChainFormatted.evolvesTo.map(nextEvolution => {

        nextEvolution = { ...nextEvolution, evolvesFrom: evolutionChainFormatted.name }

        return traverseEvolutionChain(nextEvolution).map(arr =>
          [evolutionChainFormatted].concat(arr)
        )
      })
    )
  }

  const statsData = () => {
    return pokemon.stats.map(({ base_stat, stat: { name } }) => {
      return { baseStat: base_stat, name: capitalize(name) }
    })
  }

  return (
    <PokemonContainer>

      {
        pokemon &&
        <>
          <Title>
            <Number>
              #{pokemon.id}&nbsp;
            </Number>
            <span>
              {capitalize(pokemon.name)}
            </span>
          </Title>

          <ProfileContainer>
            <Profile>
              <ImageContainer>
                {
                  pokemon.sprites.front_default &&
                  <img src={pokemon.sprites.front_default} alt="Pokemon" />
                }
              </ImageContainer>
              <PokemonTypes types={pokemon.types} />
            </Profile>
            <GraphContainer>
              <StatsRadar
                data={statsData()}
                keys={['baseStat']}
              />
            </GraphContainer>
          </ProfileContainer>

          <Section>
            Evoluções
          </Section>
          <EvolutionTree evolutionChain={evolutionChain} />
        </>
      }

    </PokemonContainer>
  )
}

Pokemon.propTypes = {
  match: PropTypes.object,
}

export default Pokemon
