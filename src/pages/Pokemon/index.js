import React, { useState, useEffect, useCallback } from 'react'
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
import PokemonEvolvesTo from "../../dataObjects/PokemonEvolvesTo"


const Pokemon = ({ match: { params } }) => {

  const [pokemon, setPokemon] = useState(null)
  const [evolutionChainUrl, setEvolutionChainUrl] = useState(null)
  const [evolutionChain, setEvolutionChain] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [params.id])

  useEffect(() => {
    if (!pokemon) {
      return
    }

    fetch(pokemon.species.url)
      .then((response) => response.json())
      .then(({ evolution_chain: { url } }) => setEvolutionChainUrl(url))

  }, [pokemon])

  const traverseEvolutionChain = useCallback(evolutionChain => {
    const evolutionChainFormatted = new PokemonEvolvesTo(evolutionChain)

    const onlyLastEvolution = evolutionChainFormatted.getEvolvesTo().length ?
      [] :
      [[evolutionChainFormatted]]

    return onlyLastEvolution.concat(
      ...evolutionChainFormatted.getEvolvesTo().map(nextEvolution => {

        nextEvolution = { ...nextEvolution, evolvesFrom: evolutionChainFormatted.getName() }

        return traverseEvolutionChain(nextEvolution).map(arr =>
          [evolutionChainFormatted].concat(arr)
        )
      })
    )
  }, [])

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
  }, [evolutionChainUrl, traverseEvolutionChain])


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

          {
            evolutionChain &&
            <EvolutionTree evolutionChain={evolutionChain} />
          }
        </>
      }

    </PokemonContainer>
  )
}

Pokemon.propTypes = {
  match: PropTypes.object,
}

export default Pokemon
