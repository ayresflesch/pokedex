import { capitalize } from "../helpers/stringHelper"

class PokemonEvolvesTo {

  constructor(evolutionChain) {
    this.evolutionChain = evolutionChain

    this.species = evolutionChain.species
    this.evolvesTo = evolutionChain.evolves_to
    this.evolvesFrom = evolutionChain.evolvesFrom
    this.evolutionDetails = evolutionChain.evolution_details
  }

  getName() {
    return this.species.name
  }

  getUrl() {
    return this.species.url
  }

  getEvolvesTo() {
    return this.evolvesTo
  }

  _getGender(gender) {
    switch (gender) {
      case 1:
        return 'Female'
      case 2:
        return 'Male'
      case 3:
        return 'Genderless'
      default:
        return
    }
  }

  _getRelativePhysicalStats(relativePhysicalStats) {
    switch (relativePhysicalStats) {
      case 1:
        return 'Attack greater than Defence'
      case 0:
        return 'equal Attack and Defence'
      case -1:
        return 'Defence greater than Attack'
      default:
        return
    }
  }

  getEvolutionTexts() {
    let evolutionTexts = this.evolutionDetails.map(detail => {
      if (detail.trigger.name === 'level-up') {
        if (!detail.time_of_day && !detail.location && !detail.gender && !detail.min_level && !detail.known_move_type
          && !detail.party_species && !detail.min_beauty && !detail.party_type) {
          return null
        }

        if (detail.min_happiness || detail.min_affection) {
          if (detail.time_of_day) {
            return `${capitalize(this.evolvesFrom)} with Friendship at least ${detail.min_happiness} during the ${detail.time_of_day}`
          }

          if (detail.known_move_type) {
            return `${capitalize(this.evolvesFrom)} with Friendship at least ${detail.min_affection}
             while knowing a ${capitalize(detail.known_move_type.name)} Type move`
          }

          return `${capitalize(this.evolvesFrom)} with Friendship at least ${detail.min_happiness}`
        }

        if (detail.known_move) {
          return `Level up ${capitalize(this.evolvesFrom)} knowing the move ${capitalize(detail.known_move.name)}`
        }

        if (detail.location) {
          return `Level up ${capitalize(this.evolvesFrom)} in ${capitalize(detail.location.name)}`
        }

        if (detail.time_of_day) {
          if (detail.held_item) {
            return `${capitalize(this.evolvesFrom)} holding ${capitalize(detail.held_item.name)} during the ${detail.time_of_day}`
          }

          return `${capitalize(this.evolvesFrom)} reaches level ${detail.min_level} during the ${detail.time_of_day}`
        }

        if (detail.gender) {
          return `${this._getGender(detail.gender)} ${capitalize(this.evolvesFrom)} reaches level ${detail.min_level}`
        }

        if (detail.party_species) {
          return `Level up ${capitalize(this.evolvesFrom)} with a ${capitalize(detail.party_species.name)} in your party`
        }

        if (detail.min_beauty) {
          return `Level up ${capitalize(this.evolvesFrom)} with Beaty at least ${detail.min_beauty}`
        }

        if (detail.party_type) {
          return `${capitalize(this.evolvesFrom)} reaches level ${detail.min_level} with a ${capitalize(detail.party_type.name)} Type Pokémon in your party`
        }

        if (detail.turn_upside_down) {
          return `${capitalize(this.evolvesFrom)} reaches level ${detail.min_level} while holding your Nintendo 3DS or Nintendo Switch upside down`
        }

        if (detail.needs_overworld_rain) {
          return `${capitalize(this.evolvesFrom)} reaches level ${detail.min_level} in an area that is Raining or Foggy in the overworld`
        }

        if (detail.relative_physical_stats || detail.relative_physical_stats === 0) {
          return `${capitalize(this.evolvesFrom)} reaches level ${detail.min_level} with ${this._getRelativePhysicalStats(detail.relative_physical_stats)}`
        }

        return `${capitalize(this.evolvesFrom)} reaches level ${detail.min_level}`
      }

      return null
    })

    return evolutionTexts.filter(text => !!text)
  }

}

export default PokemonEvolvesTo