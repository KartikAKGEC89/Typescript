import React from 'react'

type Style = {
    styles: React.CSSProperties
}
const Container = (props: Style) => {
  return (
    <div>
          <h1 style={props.styles}> Hello </h1>
    </div>
  )
}

export default Container
