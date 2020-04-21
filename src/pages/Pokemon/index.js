import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from "prop-types"
import {
  PokemonContainer,
  Title,
  Number,
  ProfileContainer,
  ImageContainer,
  GraphContainer,
  Profile,
  Section,
  Genera
} from "./styles"

import { capitalize } from "../../helpers/stringHelper"
import StatsRadar from "./components/StatsRadar"
import PokemonTypes from '../../components/PokemonTypes'
import EvolutionTree from './components/EvolutionTree'
import PokemonEvolvesTo from "../../dataObjects/PokemonEvolvesTo"
import Varieties from './components/Varieties'

const Pokemon = ({ match: { params } }) => {

  const [pokemon, setPokemon] = useState(null)
  const [pokemonSpecies, setPokemonSpecies] = useState(null)
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
      .then(pokemonSpecies => {
        setPokemonSpecies(pokemonSpecies)
      })

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
    if (!pokemonSpecies) {
      return
    }

    fetch(pokemonSpecies.evolution_chain.url)
      .then((response) => response.json())
      .then(({ chain }) => {
        const evolutionChain = traverseEvolutionChain(chain)
        setEvolutionChain(evolutionChain)
      })
  }, [pokemonSpecies, traverseEvolutionChain])

  const genera = () => {
    return pokemonSpecies.genera.find(genus => genus.language.name === 'en').genus
  }

  const statsData = () => {
    return pokemon.stats.map(({ base_stat, stat: { name } }) => {
      return { baseStat: base_stat, name: capitalize(name) }
    })
  }

  const pokemonVarieties = () => {
    return pokemonSpecies.varieties.filter(v => !v.is_default)
  }

  return (
    <PokemonContainer>

      {
        pokemon && pokemonSpecies &&
        <>


          <ProfileContainer>
            <div>
              <Profile>
                <ImageContainer>
                  {
                    pokemon.sprites.front_default &&
                    <img src={pokemon.sprites.front_default} alt="Pokemon" />
                  }
                </ImageContainer>

                <div>
                  <Title>
                    <span>
                      {capitalize(pokemon.name)}&nbsp;
                    </span>
                    <Number>#{pokemon.id}</Number>
                  </Title>
                  <Genera>
                    {genera()}
                  </Genera>
                  <PokemonTypes alignLeft types={pokemon.types} />
                </div>
              </Profile>
            </div>
          </ProfileContainer>

          <Section>
            Stats
          </Section>

          <GraphContainer>
            <StatsRadar
              data={statsData()}
              keys={['baseStat']}
            />
          </GraphContainer>

          <Section>
            Evolution
          </Section>

          {
            evolutionChain &&
            <EvolutionTree evolutionChain={evolutionChain} />
          }

          <Section>
            Varieties
          </Section>

          <Varieties varieties={pokemonVarieties()} />
        </>
      }

    </PokemonContainer>
  )
}

Pokemon.propTypes = {
  match: PropTypes.object,
}

export default Pokemon
