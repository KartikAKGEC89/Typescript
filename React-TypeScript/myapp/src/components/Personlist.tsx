import React from 'react'
type PersonList = {
  names: {
    first: string
    last: string
  }[];
}

const Personlist = (props:PersonList) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>{ name.first}{name.last }</h2>
        )
      })}
    </div>
  )
}

export default Personlist
