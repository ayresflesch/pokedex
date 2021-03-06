import React, { useContext, useState, useEffect } from 'react'
import {
  ProgressBarContainer,
  Header,
  StatsFilterContainer,
  StatsFilter
} from "./styles"

import { PokemonContext } from '../../provider/PokemonProvider'
import ProgressBar from '../../../../components/ProgressBar'
import Section from '../../../../components/Section'
import { calculateAllStats } from '../../../../helpers/statsHelper'

const StatsEnum = {
  BASE: 'base',
  MIN: 'min',
  MAX: 'max',
}

const Stats = () => {
  const { pokemon } = useContext(PokemonContext)

  const [allStats, setAllStats] = useState(null)
  const [statSelected, setStatSelected] = useState(StatsEnum.BASE)

  useEffect(() => {
    if (!pokemon) return
    setAllStats(calculateAllStats(pokemon.stats))
  }, [pokemon])

  const toggleStat = (stat) => {
    setStatSelected(stat)
  }

  return (
    <ProgressBarContainer>
      <Header>
        <Section text={'Stats'} />
        <StatsFilterContainer>
          <StatsFilter>
            <input type="radio" id="base"
              onChange={() => toggleStat(StatsEnum.BASE)}
              checked={statSelected === StatsEnum.BASE} />
            <label htmlFor="base">Base</label>
          </StatsFilter>
          <StatsFilter >
            <input type="radio" id="min"
              onChange={() => toggleStat(StatsEnum.MIN)}
              checked={statSelected === StatsEnum.MIN} />
            <label htmlFor="min">Min</label>
          </StatsFilter>
          <StatsFilter>
            <input type="radio" id="max"
              onChange={() => toggleStat(StatsEnum.MAX)}
              checked={statSelected === StatsEnum.MAX} />
            <label htmlFor="max">Max</label>
          </StatsFilter>
        </StatsFilterContainer>
      </Header>

      {
        allStats && allStats[statSelected].stats.map((s, i) => (
          <ProgressBar key={i}
            label={s.name}
            value={s.stat}
            percentage={(s.stat / s.maxStat) * 100} />
        ))
      }
    </ProgressBarContainer>
  )
}

export default Stats
