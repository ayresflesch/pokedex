import React, { useContext } from 'react'
import { GraphContainer } from "./styles"
import { PokemonContext } from '../../provider/PokemonProvider'

import abbreviatedStatName from '../../../../helpers/statNameHelper'
import StatsRadar from '../StatsRadar'
import Section from '../../../../components/Section'


const GraphSection = () => {
  const { pokemon } = useContext(PokemonContext)

  const statsData = () => {
    return pokemon.stats.map(({ base_stat, stat: { name } }) => {
      const statName = abbreviatedStatName(name)
      const upperCaseStatName = statName.toUpperCase()

      return { baseStat: base_stat, name: upperCaseStatName }
    })
  }

  return (
    <>
      <Section text={"Stats"} />

      <GraphContainer>
        <StatsRadar
          data={statsData()}
          keys={['baseStat']}
        />
      </GraphContainer>
    </>
  )
}

export default GraphSection
