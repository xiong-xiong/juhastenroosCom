import React from 'react'
import {Link} from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Grid from '../components/grid'
import * as R from 'ramda'

import './style.scss'

const IndexPage = ({ data }) => {
  const posts = R.path(['post', 'edges'], data);
  return (
    <Layout current={'etusivu'}>
      <SEO
        title="Juha Stenroos – Frontpage"
        description="Web developer"
      />
        <Grid posts={posts} label="Blog" prefix="post" />
       
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query frontpageQuery {
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
