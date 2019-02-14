import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Content from '../components/content'
import Heading from '../components/heading'
import DateParser from '../components/dateparser'
import './style.scss'


class Cv extends Component {
  render() {
    const post = this.props.data.wordpressWpCv
    return (
      <div>
        <SEO title={post.title} description={post.excerpt} />
        <Layout>
          <div className="singlePost">
            <Heading heading={post.title} />
           
            <Content content={post.content} />
            <div className="articleDate">
                Last edited: <DateParser date={post.modified} /> 
            </div>
          </div>
         
        </Layout>
      </div>
    )
  }
}

export default Cv

export const pageQuery = graphql`
  query currentCvQuery($id: String!) {
    wordpressWpCv(id: { eq: $id }) {
      title
      excerpt
      content
      modified
    }
  }
`
