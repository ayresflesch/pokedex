import React from 'react'
import { LoadingIconContainer } from "./styles"
import { FaSpinner } from "react-icons/fa"

const LoadingIcon = () => {
  return (
    <LoadingIconContainer>
      <FaSpinner />
    </LoadingIconContainer>
  )
}

export default LoadingIcon
