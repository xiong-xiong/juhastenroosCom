import React from 'react'
import './style.scss'

const Hero = ({ img, video, bgColor, sticker }) => (
  <div
    className="heroContainer"
    style={{
      backgroundColor: bgColor,
      backgroundImage: img ? `url(${img})` : null,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: img ? `50vh` : null,
    }}
  >
    
  </div>
)


export default Hero
