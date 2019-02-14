import PropTypes from 'prop-types'
import React from 'react'
import './style.scss'

const Heading = ({ heading }) => <h2 className="articleHeading">{heading}</h2>

Heading.propTypes = {
  heading: PropTypes.string,
}

Heading.defaultProps = {
  heading: '',
}

export default Heading
