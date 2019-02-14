import PropTypes from 'prop-types'
import React from 'react'
import './style.scss'

const Content = ({ content }) => (
  <div className="mainContent">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

Content.propTypes = {
  content: PropTypes.string,
}

Content.defaultProps = {
  content: '',
}

export default Content
