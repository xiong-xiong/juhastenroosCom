import {Link} from 'gatsby'
import React from 'react'
import Heading from '../heading'
import Content from '../content'
import DateParser from '../dateparser'
import './style.scss'

const Teaser = props => {

  return (
    <Link to={`/${props.prefix}/${props.post.slug}`} className="teaserBox cell large-6 medium-6 small-12">
    <Heading heading={props.post.title} />
   
    {(props.cv === true) ? <Content content={props.post.content}  /> : null }
    {!props.cv ? <p><DateParser date={props.post.date} /></p> : <p style={{fontStyle: 'italic'}}>Last edited: <DateParser date={props.post.modified} /></p> }
    <span className="teaserLabel">{props.label}</span>
  </Link>
  )


}




export default Teaser