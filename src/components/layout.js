import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'
import Header from './header'
import Hero from './hero'
import Footer from './footer'
import '../assets/css/animate.css'
import '../assets/css/foundation.min.css'

const Layout = ({
  children,
  heroImg,
  current,
  bgColor,
  video,
  hero_sticker,
}) => (
  <StaticQuery
    query={graphql`
      query navQuery {
        posts: allWordpressPost(filter: { slug: { ne: "etusivu" } }) {
          edges {
            node {
              title
              slug
              id
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header
          siteTitle="Juha Stenroos"
          posts={data.posts.edges}
          current={current}
        />
        {heroImg ? (
          <Hero bgColor={bgColor} img={heroImg} sticker={hero_sticker} />
        ) : null}

        <div
          style={{
            margin: `90px auto`,
            maxWidth: 1200,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
         
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
