import React from 'react'
import Personlist from './Personlist';
type Greetprops = {
    name: string
    num: number
}


const Greet = (props: Greetprops) => {
  const nameList = [
    {
      first: "Rahul",
      last:"Kumar"
    },
    {
      first: "Rohan",
      last:"Kumar"
    }
  ]
  return (
    <div>
      <h1>Hellooooooooooooooooooooo........ {props.name} {props.num}</h1>
      <Personlist names={nameList} />
    </div>
  )
}

export default Greet
