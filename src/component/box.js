import React from 'react'

const box = (props) => {
    console.log(props)
  return (
    <div className="box">
    Box {props.num}
    <p>{props.name}</p>
  </div>
  )
}

export default box
