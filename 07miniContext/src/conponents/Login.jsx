import React, {useState, useContext} from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>

        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username' />

        {'    '}

        <input type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='username' />

        <button onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default Login