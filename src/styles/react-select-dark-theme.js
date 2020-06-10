const reactSelectDarkTheme = {
  control: styles => ({
    ...styles,
    backgroundColor: 'var(--grey-800)',
    borderColor: 'var(--grey-700)'
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: 'var(--grey-500)',
    ':hover': { color: 'var(--grey-400)' }
  }),
  indicatorSeparator: styles => ({
    ...styles,
    backgroundColor: 'var(--grey-400)',
  }),
  clearIndicator: styles => ({
    ...styles,
    color: 'var(--grey-500)',
    ':hover': { color: 'var(--grey-400)' }
  }),
  placeholder: styles => ({
    ...styles,
    color: 'var(--grey-200)',
  }),
  singleValue: styles => ({
    ...styles,
    color: 'var(--grey-200)',
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'var(--grey-800)',
  }),
  option: (styles, state) => ({
    ...styles,
    color: 'var(--grey-200)',
    backgroundColor: state.isFocused ? 'var(--grey-600)' : styles.backgroundColor,
    ':active': { backgroundColor: 'var(--grey-700)' }
  }),
}

export default reactSelectDarkTheme