import React from 'react'
import PropTypes from "prop-types"
import { SectionWrapper } from "./styles"

const Section = ({ text }) => <SectionWrapper>{text}</SectionWrapper>

Section.propTypes = {
  text: PropTypes.string,
}

export default Section
