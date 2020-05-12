const abbreviatedStatName = (name) => {
  let abbreviatedStatName = name

  if (name === 'special-attack') {
    abbreviatedStatName = 'Sp Atk'
  }
  if (name === 'special-defense') {
    abbreviatedStatName = 'Sp Def'
  }
  if (name === 'speed') {
    abbreviatedStatName = 'Spd'
  }
  if (name === 'attack') {
    abbreviatedStatName = 'Atk'
  }
  if (name === 'defense') {
    abbreviatedStatName = 'Def'
  }

  return abbreviatedStatName
}

export default abbreviatedStatName