import statCalculator from "pokemon-stat-calculator"

const statsNames = [
  'Hp',
  'Attack',
  'Defense',
  'Special Attack',
  'Special Defense',
  'Speed',
]

const calculateAllStats = (pokemonStats) => {
  const allStats = {}

  allStats.base = calculateBaseStats(pokemonStats)
  allStats.min = calculateMinStats(pokemonStats)
  allStats.max = calculateMaxStats(pokemonStats)

  return allStats
}

const calculateBaseStats = (pokemonStats) => {
  const baseStats = pokemonStats.map(s => s.base_stat)

  const maxStat = Math.max(...baseStats)
  const base = {
    stats: baseStats.map((stat, index) => ({
      stat, name: statsNames[index], maxStat
    }))
  }

  return base
}

const calculateMinStats = (pokemonStats) => {
  const baseStats = pokemonStats.map(s => s.base_stat)

  let zeroIVs = [0, 0, 0, 0, 0, 0]
  let emptyEVs = [0, 0, 0, 0, 0, 0]
  let emptyNature = [0.9, 0.9, 0.9, 0.9, 0.9]

  const minStats = statCalculator.calAllStats(zeroIVs, baseStats, emptyEVs, 100, emptyNature)
  const maxMinStat = Math.max(...minStats)

  const min = {
    stats: minStats.map((stat, index) => ({
      stat, name: statsNames[index], maxStat: maxMinStat
    }))
  }

  return min
}

const calculateMaxStats = (pokemonStats) => {
  const baseStats = pokemonStats.map(s => s.base_stat)

  let fullIVs = [31, 31, 31, 31, 31, 31]
  let fullEVs = [252, 252, 252, 252, 252, 252]
  let fullNature = [1.1, 1.1, 1.1, 1.1, 1.1]

  const maxStats = statCalculator.calAllStats(fullIVs, baseStats, fullEVs, 100, fullNature)
  const maxMaxStat = Math.max(...maxStats)

  const max = {
    stats: maxStats.map((stat, index) => ({
      stat, name: statsNames[index], maxStat: maxMaxStat
    }))
  }

  return max
}

export {
  calculateAllStats
}