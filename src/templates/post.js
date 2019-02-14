import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Content from '../components/content'
import Heading from '../components/heading'
import DateParser from '../components/dateparser'
import './style.scss'

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <div>
      <SEO title={post.title} description={post.excerpt} />
      <Layout>
        <div className="singlePost">
          <Heading heading={post.title} />
         
          <Content content={post.content} />
          <div className="articleDate">
              Published in Juha.blog: <DateParser date={post.date} /> 
          </div>
        </div>
       
      </Layout>
    </div>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      date
    }
  }
`
