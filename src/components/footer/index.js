import PropTypes from 'prop-types'
import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import './style.scss'

const Footer = ({ hashtag }) => {

  const date = new Date()
  const year = date.getFullYear()

return (
  <footer className="siteFooter">
    <div className="footerContent">
      <div className="footerLeft">
        <div className="footerSomeIcons">
          <a 
            href="https://www.twitter.com/juhastenroos/" 
            aria-label="Twitter" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.linkedin.com/in/juhastenroos/" 
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        
          <a 
            href="https://github.com/xiong-xiong" 
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
         
        </div>
        
      </div>
      <div className="footerRight">
        Copyright {year} © Juha Stenroos
      </div>
    </div>
  </footer>
)
}

Footer.propTypes = {
  hashtag: PropTypes.string,
}

Footer.defaultProps = {
  hashtag: '',
}

export default Footer
