import React, { useContext } from 'react'
import { ProgressBarContainer } from "./styles"
import { PokemonContext } from '../../provider/PokemonProvider'

import { capitalize } from '../../../../helpers/stringHelper'
import ProgressBar from '../../../../components/ProgressBar'
import Section from '../../../../components/Section'

const Stats = () => {
  const { pokemon } = useContext(PokemonContext)

  const statsData = () => {
    const maxStat = Math.max.apply(Math, pokemon.stats.map((s) => s.base_stat))

    return pokemon.stats.map(({ base_stat, stat: { name } }) => (
      { baseStat: base_stat, name: capitalize(name), maxStat }
    ))
  }

  return (
    <ProgressBarContainer>
      <Section text={'Stats'} />

      {
        statsData().map((s, i) => (
          <ProgressBar key={i}
            label={s.name}
            value={s.baseStat}
            percentage={(s.baseStat / s.maxStat) * 100} />
        ))
      }
    </ProgressBarContainer>
  )
}

export default Stats
