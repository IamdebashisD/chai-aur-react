import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$^&*_{}[]/()'

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(charIndex)
    }
    setPassword(pass)

  }, [length, numberAllowed,charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback( ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    // alert('copied!')
  }, [password])

  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md px-4 mx-auto my-8 text-orange-500 bg-gray-700 rounded-lg shadow-md'>
        <h1 className='my-3 text-center text-white'>Password Generator</h1>

      <div class="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={password}
          className='w-full px-3 py-1 outline-none'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='px-3 py-1 font-medium text-white transition-colors bg-blue-500 rounded hover:bg-blue-600'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="NumberInput"
          defaultChecked={numberAllowed}
          onChange={() => {setNumberAllowed((prev) => !prev) }}
          />
          <label htmlFor="numbersinput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="characters"
          defaultChecked={charAllowed}
          onChange={() => {setCharAllowed((prev) => !prev) }}
          />
          <label htmlFor="charactersInput">Characters</label>
        </div>
      </div>
      </div>
    </>
    
  )
}

export default App
