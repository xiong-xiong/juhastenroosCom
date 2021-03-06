import React from 'react'
import {Link} from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Grid from '../components/grid'
import * as R from 'ramda'

import './style.scss'

const Portfolio = ({ data }) => {
  const posts = R.path(['post', 'edges'], data);
  return (
    <Layout current={'portfolio'}>
      <SEO
        title="Juha Stenroos – Frontpage"
        description="Web developer"
      />
        <Grid posts={posts} label="Blog" />
       
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query portfolioQuery {
    post: allWordpressPost  (filter: {categories: {in: 22}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          content
          slug
          categories
          date
          id
        }
      }
    }
  }
`
