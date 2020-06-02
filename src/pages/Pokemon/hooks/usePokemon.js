import { useEffect, useState } from 'react'

export const usePokemon = (pokemonId) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [pokemonId])

  return pokemon
}