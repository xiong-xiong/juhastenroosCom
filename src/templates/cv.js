import React, { Component } from 'react'
import { graphql } from 'gatsby'


class Cv extends Component {
  render() {

    return (
      <div />
    )
  }
}

export default Cv

export const pageQuery = graphql`
  query currentCvQuery($id: String!) {
    wordpressWpCv(id: { eq: $id }) {
      title
    }
  }
`
