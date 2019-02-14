import PropTypes from 'prop-types'
import React from 'react'
import './style.scss'

const Video = ({ src, title }) => (
  <div className="iframeContainer">
    <iframe src={src} title={title} allowFullScreen />
  </div>
)

Video.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
}

Video.defaultProps = {
  width: '420',
  height: '315',
  src: '',
}

export default Video
