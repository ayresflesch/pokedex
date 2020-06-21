import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { GoPrimitiveDot } from "react-icons/go"

import { Row } from "./styles"

import Form from '../Form'
import { IconContainer } from '../EvolutionTree/styles'
import { Link } from 'react-router-dom'

const Forms = ({ forms }) => {

  const isLastPokemon = (index, forms) => {
    return index !== forms.length - 1
  }

  const urlFormatted = (url) => {
    const urlSplitted = url.split("/")
    return urlSplitted[urlSplitted.length - 2]
  }

  return (
    <Row>
      {
        forms.map((f, index) => (
          <Fragment key={index}>
            <Link to={urlFormatted(f.pokemon.url)}>
              <Form form={f.pokemon} />
            </Link>
            {
              isLastPokemon(index, forms) &&
              <IconContainer>
                <GoPrimitiveDot />
              </IconContainer>
            }
          </Fragment>
        ))

      }
    </Row>
  )
}

Forms.propTypes = {
  forms: PropTypes.array,
}

export default Forms
