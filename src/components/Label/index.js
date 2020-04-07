import React from 'react'
import { LabelTag } from './styles'
import PropTypes from "prop-types"

const Label = ({ text }) => {
  return (
    <LabelTag>{text}</LabelTag>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Label
