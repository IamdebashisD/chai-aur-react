import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {

    const [themeMode, setThemeMode] = useState('light')
    
    const lightTheme = ()=>{
        setThemeMode("light")
    }
    const darkTheme = ()=>{
        setThemeMode("dark")
    }

    //  actual change in theme 

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}} >
      <div className="flex flex-wrap items-center min-h-screen">
            <div className="w-full">
                <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                    <ThemeBtn />
                </div>
                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
      </div>
    </ThemeProvider>
  )
}

export default App
