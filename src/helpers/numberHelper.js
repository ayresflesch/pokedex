export const numberFormatted = (number) => {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2, minimumFractionDigits: 2
  }).format(number)
}

export const metresToInchesString = (numberInMetres) => {
  return `${Math.floor(numberInMetres * 3.2808)}"` +
    `${Math.round(((numberInMetres * 3.2808) % 1) * 12)}'`
}
