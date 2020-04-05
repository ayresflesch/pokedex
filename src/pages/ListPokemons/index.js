import React, { useState, useEffect } from "react"
import PokemonCard from "./components/PokemonCard/"
import InfiniteScroll from "react-infinite-scroller"
import { FaSpinner } from "react-icons/fa"

import {
  PokemonsContainers,
  LoadingIconContainer
} from "./styles"

const ListPokemons = () => {
  const [pagination, setPagination] = useState(null)
  const [pokemons, setPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const [fetchPokemonsUrl, setFetchPokemonsUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  )

  useEffect(() => {
    setIsFetching(true)

    const fetchPokemons = () => {
      fetch(fetchPokemonsUrl)
        .then((response) => response.json())
        .then((response) => {
          setPagination(response)
          setPokemons([...pokemons, ...response.results])
          setIsFetching(false)
        })
    }
    fetchPokemons()
  }, [fetchPokemonsUrl])

  const loadMorePokemons = () => {
    if (isFetching) {
      return
    }

    setFetchPokemonsUrl(pagination.next)
  }

  const hasMoreItemsToLoad = () => {
    // return false
    return !!pagination.next
  }

  return (
    <>
      {pokemons.length > 0 && (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMorePokemons}
          hasMore={hasMoreItemsToLoad()}
        >
          <PokemonsContainers>
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} url={pokemon.url} />
            ))}
          </PokemonsContainers>
          {
            isFetching &&
            <LoadingIconContainer>
              <FaSpinner />
            </LoadingIconContainer>
          }
        </InfiniteScroll>
      )}
    </>
  )
}

export default ListPokemons
