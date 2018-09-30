import React from 'react'
import './Card.css'

const Card = props => {
  let style = {}
  if (props.showState) {
    style.backgroundColor = props.backgroundColor;
  }
  return(
    <div
      className="card"
      style={style}
      onClick={props.onClick}
    />
  )
}

export default Card;