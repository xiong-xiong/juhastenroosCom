import {Link} from 'gatsby'
import React from 'react'
import Heading from '../heading'
import Content from '../content'
import './style.scss'

const Teaser = props => (
  <Link to={`/${props.prefix}/${props.post.slug}`} className="teaserBox cell large-6 medium-6 small-12">
    <Heading heading={props.post.title} />
    {!props.cv ? <p>{props.post.date}</p> : null }
    {(props.cv === true) ? <Content content={props.post.content}  /> : null }
    <span className="teaserLabel">{props.label}</span>
  </Link>
)



export default Teaser