import React from 'react'
import PropTypes from "prop-types"

import {
  LabelContainer,
  Label,
  Value,
  ProgressContainer,
  Progress
} from "./styles"

const ProgressBar = ({ label, value, percentage }) => {
  return (
    <div>
      <LabelContainer>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </LabelContainer>
      <ProgressContainer>
        <Progress percentage={percentage} />
      </ProgressContainer>
    </div>
  )
}

ProgressBar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  percentage: PropTypes.number
}

export default ProgressBar