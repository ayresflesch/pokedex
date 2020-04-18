import React, { useState, useEffect } from "react"
import LoadingIcon from "../../components/LoadingIcon"
import Filters from "./components/Filters"
import PokemonCard from "./components/PokemonCard/"
import InfiniteScroll from "react-infinite-scroller"
import {
  PokemonsContainers,
  LoadingIconContainer
} from "./styles"

const URL = "https://pokeapi.co/api/v2/pokemon"

const ListPokemons = () => {
  const [pagination, setPagination] = useState(null)
  const [pokemons, setPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const [typeOptionSelected, setTypeOptionSelected] = useState(null)

  const [fetchPokemonsUrl, setFetchPokemonsUrl] = useState(URL)

  useEffect(() => {
    if (!fetchPokemonsUrl) {
      return
    }

    setIsFetching(true)

    const fetchPokemons = () => {
      fetch(fetchPokemonsUrl)
        .then((response) => response.json())
        .then((response) => {
          setPagination(response)
          setPokemons(pokemons => [...pokemons, ...response.results])
          setIsFetching(false)
        })
    }
    fetchPokemons()
  }, [fetchPokemonsUrl])

  useEffect(() => {
    if (!typeOptionSelected) {
      setPokemons([])
      setFetchPokemonsUrl(URL)
      return
    }

    setFetchPokemonsUrl(null)

    fetch(typeOptionSelected.url)
      .then((response) => response.json())
      .then((response) => {
        const pokemons = response.pokemon.map(pokemon => {
          const { name, url } = pokemon.pokemon
          return { name, url }
        })

        setPokemons([...pokemons])
      })

  }, [typeOptionSelected])

  const loadMorePokemons = () => {
    const shouldNotLoadMore = isFetching || typeOptionSelected
    if (shouldNotLoadMore) {
      return
    }

    setFetchPokemonsUrl(pagination.next)
  }

  const hasMoreItemsToLoad = () => {
    if (typeOptionSelected) {
      return false
    }

    return !!pagination.next
  }

  return (
    <>
      <Filters
        typeOptionSelected={typeOptionSelected}
        setTypeOptionSelected={setTypeOptionSelected} />

      {
        pokemons.length > 0 && (
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
                <LoadingIcon />
              </LoadingIconContainer>
            }
          </InfiniteScroll>
        )
      }
    </>
  )
}

export default ListPokemons
