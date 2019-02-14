import { Link } from 'gatsby'
import React, { Component } from 'react'
import './style.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    if (typeof window !== 'undefined') {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
  }

  render() {
    
    return (
      <nav
            className="navContainer mobileNavContainer animated slideInLeft"
          >
            <div className="navBg" />
            <ul>
              <li>
                <Link to={`/`} aria-label="Etusivu" className={this.props.current === 'etusivu' ? 'current' : null}>
                  Etusivu
                </Link>
              </li>
              <li>
                <Link to={`/cv`} aria-label="Cv" className={this.props.current === 'cv' ? 'current' : null}>
                  Cv
                </Link>
              </li>
              <li>
                <Link to={`/portfolio`} aria-label="Portfolio" className={this.props.current === 'portfolio' ? 'current' : null}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to={`/freelance`} aria-label="Freelance" className={this.props.current === 'freelance' ? 'current' : null}>
                  Freelance
                </Link>
              </li>
              <li>
                <a 
                href='http://juha.blog' 
                aria-label="Blog" 
                target="_blank"
                rel="noopener noreferrer"
                >
                  Juha.blog
                </a>
              </li>
              <li>
                <a 
                href='http://reseptit.blog' 
                aria-label="Recipe Blog" 
                target="_blank"
                rel="noopener noreferrer"
                >
                  Reseptit.blog
                </a>
              </li>
            </ul>
         
            
           
          </nav>
    )
  }
}
export default Nav
