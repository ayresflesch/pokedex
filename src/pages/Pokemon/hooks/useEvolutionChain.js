import { useCallback, useEffect, useState } from "react"
import PokemonEvolvesTo from "../../../dataObjects/PokemonEvolvesTo"


export const useEvolutionChain = (pokemonSpecies) => {
  const [evolutionChain, setEvolutionChain] = useState(null)

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

  return evolutionChain
}
