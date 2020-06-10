import React, { useState, useEffect, useContext } from 'react'
import Select from 'react-select'

import PropTypes from "prop-types"
import { capitalize } from "../../../../helpers/stringHelper"
import Label from "../../../../components/Label"
import { FiltersContainer, FilterTypeContainer } from "./styles"
import { ThemeContextWrapper } from '../../../../providers/ThemeProviderWrapper'
import reactSelectDarkTheme from '../../../../styles/react-select-dark-theme'

const Filters = ({ typeOptionSelected, setTypeOptionSelected, type, setType }) => {

  const [typeOptions, setTypeOptions] = useState([])
  const { isDarkTheme } = useContext(ThemeContextWrapper)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((response) => response.json())
      .then((data) => setTypeOptions([...data.results]))

  }, [])

  useEffect(() => {
    if (!typeOptions) {
      return
    }

    setTypeOptionSelected(typeOptions.find(opt => opt.name === type))
  }, [typeOptions, setTypeOptionSelected, type])

  const handleTypeChange = (selected) => {
    setTypeOptionSelected(selected)
    setType(selected ? selected.name : selected)
  }

  return (
    <FiltersContainer>
      <FilterTypeContainer>
        <Label text={"Tipo"} />
        <Select
          placeholder="Selecione o tipo"
          isSearchable={true}
          isLoading={typeOptions.length === 0}
          isClearable={true}
          loadingMessage={() => "Carregando..."}
          value={typeOptionSelected}
          onChange={handleTypeChange}
          options={typeOptions}
          getOptionValue={option => option['url']}
          getOptionLabel={option => capitalize(option['name'])}
          styles={isDarkTheme() ? reactSelectDarkTheme : {}}
        />
      </FilterTypeContainer>
    </FiltersContainer>
  )
}

Filters.propTypes = {
  typeOptionSelected: PropTypes.object,
  setTypeOptionSelected: PropTypes.func.isRequired,
  type: PropTypes.string,
  setType: PropTypes.func.isRequired,
}

export default Filters
