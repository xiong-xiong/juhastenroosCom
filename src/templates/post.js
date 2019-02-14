import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Content from '../components/content'
import Heading from '../components/heading'
import './style.scss'

class Campaign extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <div>
        <SEO title={post.title} description={post.excerpt} />
        <Layout>
          <Heading heading={post.title} />
          <Content content={post.content} />
         
        </Layout>
      </div>
    )
  }
}

export default Campaign

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
    }
  }
`
