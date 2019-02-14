import React from 'react'
import Teaser from '../teaser'
import './style.scss'

const Grid = props => (
  <div className="grid-x grid-margin-x grid-margin-y gridContainer animated fadeInLeft">
    {props.posts.map(post => {
      return (
        <Teaser 
          post={post.node}
          key={post.node.id}
          label={props.label}
          cv={(props.cv === true) ? true : false}
        />
      )
      
    })}
  </div>
)



export default Grid