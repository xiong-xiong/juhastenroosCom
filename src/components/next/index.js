import { Link } from 'gatsby'
import React from 'react'
import * as R from 'ramda'
import './style.scss'

class Next extends React.Component {
  render() {
    const sorter = R.sortBy(R.path(['node', 'acf', 'order']))
    const items = sorter(this.props.posts)
    const item = items[R.pathOr(1, ['props', 'current'], this ) - 1]

    return (
      <div className="nextContent">
        <p>Lue seuraavaksi:</p>
        {this.props.frontpage === true ?  
        <Link
          to={`/`}
          className={
            this.props.current === item.node.acf.order ? `current` : null
          }
          aria-label="Etusivu"
        >
          Etusivu
        </Link> : 

        <Link
          to={`/content/${item.node.slug}/`}
          className={
            this.props.current === item.node.acf.order ? `current` : null
          }
          aria-label={item.node.title}
        >
          {item.node.title}
        </Link> }


      </div>
    )
  }
}

export default Next
