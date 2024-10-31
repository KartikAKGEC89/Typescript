import React, {useState} from 'react'

const Usestate = () => {
    const [login, setLogin] = useState(false)
    const handlelogin = () => {
        setLogin(true)
    }

    const handlelogout = () => {
        setLogin(false)
    }
  return (
    <div>
      <button onClick={handlelogin}>Login</button>
          <button onClick={handlelogout}>LogOut</button>
          <div>Login/Logout condition render {login ? "login" : "logout"}</div>
    </div>
  )
}

export default Usestate
