export const capitalize = (string) => {
  const splittedString = _splitDashedStrings(string)

  return splittedString.map(s => {
    return _capitalize(s)
  }).join(' ')
}

const _splitDashedStrings = (string) => {
  return string.split('-')
}

const _capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1)
}