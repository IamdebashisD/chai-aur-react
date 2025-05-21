import {Chai, Fib} from './Chai'
import Footer from './Footer'
import { useState, useEffect } from 'react'



function App() {

  const [count, setcount] = useState(0)
  const [text, setText] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div>
      {/* Counter section */}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => {setcount(count + 1)}}>Increment</button>
        <button onClick={() => {setcount(count - 1)}}>decrement</button>
        <button onClick={()=>{setcount(0)}}>Reset</button>
      </div>
      <br />


      {/* Input section */}
      <div>
          <input 
          type="text" 
          value={text}
          onChange={(e)=>{setText(e.target.value)}}  // Update state on typing
          placeholder="Type something..."
        />
        <button onClick={()=>{setText('')}}>Reset</button>
        <p>you typed: {text}</p>
        <p>Character count: {text.length}</p>
        {text.length > 10 && <p style={{color: "red"}}>Maximun 10 characters allowed!</p>}
      </div>
      <br />

      {/* show message and hide message toggle*/}
      <div>
        <button onClick={()=> setShowMessage(!showMessage)}> {showMessage ? "hide" : "show"} Message</button>
        {showMessage && <h5>This is a secret message! 👀</h5>}
      </div>
      
    </div>
  );
}

export default App
