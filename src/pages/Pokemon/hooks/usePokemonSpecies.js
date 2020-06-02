import { useState, useEffect } from "react"

export const usePokemonSpecies = (pokemon) => {
  const [pokemonSpecies, setPokemonSpecies] = useState(null)

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

  return pokemonSpecies
}
