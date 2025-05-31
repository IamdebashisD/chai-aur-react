import './App.css'
import Login from './conponents/Login'
import Profile from './conponents/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
    <h1>Context API with react</h1>
    <Login />
    <Profile />

    </UserContextProvider>
  )
}

export default App
