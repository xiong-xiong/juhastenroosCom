import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Nav from '../nav'
import { FaBars, FaTimes } from 'react-icons/fa'
import * as R from 'ramda'
import './style.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0, open: false }
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
    const openNav = e => {
      this.setState({ open: !this.state.open })
    }
    const sorter = R.sortBy(R.path(['node', 'acf', 'order']))
    const items = sorter(this.props.posts)
    return (
      <div className="headerWrap">
        <div className="headerContainer animated fadeInDown">
          
          {!this.state.open ? (
            <FaBars className="menuIcon" onClick={openNav} />
          ) : null}
          {this.state.open ? (
            <FaTimes className="menuIcon closeIcon animated rollIn" onClick={openNav} />
          ) : null}
          <div>
            <Link to="/" aria-label="Etusivu">
            <h1 className="siteTitle">
            {this.props.siteTitle}
          </h1>
          <h5 className="siteSlogan">Web developer</h5>
            </Link>
          </div>
        </div>
        {this.state.open ? (
          <Nav current={this.props.current} />
        ) : null}
      </div>
    )
  }
}

export default Header
