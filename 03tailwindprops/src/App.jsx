import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import HeroSection from './components/LogoCloud'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "hitesh",
  //   age: 24
  // }

  // let myArray = [1,2,3,4,5]

  return (
    <>
      <h1 className='p-4 mb-4 text-black bg-green-400 rounded-xl'>Tailwind test</h1>
      {/* <Card username="chai aur code" btnText = "click me"/> */}
      {/* <Card username ="debashis" btnText="touch me"/> */}
      <HeroSection />

      
    </>
  )
}

export default App
