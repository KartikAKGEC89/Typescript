import React from 'react'
type Headprops = {
    children: string
}

const Heading = (props: Headprops) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Heading
