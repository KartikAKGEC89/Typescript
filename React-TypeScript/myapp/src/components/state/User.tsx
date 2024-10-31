import React, { useState } from 'react'
type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState< AuthUser | null>(null)
    const handleLoginIn = () => {
        setUser({
            name: "Kartik",
            email: "Kartik@gmail.com"
        })
    }

    const handleLoginOut = () => {
        setUser(null)
    }
  return (
    <div>
      <button onClick={handleLoginIn}> Login User</button>
      <button onClick={handleLoginOut}> Logout User</button>
          <h1>user name is {user?.name}</h1>
          <h1>user email is { user?.email}</h1>
    </div>
  )
}

export default User
