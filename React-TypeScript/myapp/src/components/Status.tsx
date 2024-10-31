import React from 'react'
type StateProp = {
    status: "Loading" | "Success" | "Error"
}

const Status = (props : StateProp) => {
    let message;
    if (props.status === "Loading") {
        message = "Hello loading...."
    } else if (props.status === "Success") {
        message = "Hello Success...."
    } else if (props.status === "Error") {
        message = "Error"
    }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default Status
