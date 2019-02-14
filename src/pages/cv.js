import React from 'react'
import {Link} from 'gatsby'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Grid from '../components/grid'
import * as R from 'ramda'

import './style.scss'

const Cv = ({ data }) => {
  const posts = R.path(['post', 'edges'], data);
  console.log(posts);
  return (
    <Layout current={'cv'}>
      <SEO
        title="Juha Stenroos – Frontpage"
        description="Web developer"
      />
        <Grid posts={posts} label="Cv" cv={true} prefix="cv" />
       
    </Layout>
  )
}

export default Cv

export const pageQuery = graphql`
  query cvQuery {
    post: allWordpressWpCv  (sort: {fields: acf___order, order: ASC}){
      edges {
        node {
          title
          content
          slug
          modified
          acf{
            order
          } 
          id
        }
      }
    }
  }
`
