import React from 'react'

const DateParser = props => {

  const date = new Date(props.date)
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <span>
      {day}.{month}.{year}
    </span>
  )
}

export default DateParser