import { useState } from 'react'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl'>
          <button onClick={()=> setcolor('red')} 
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "red"}}
          >Red</button>

          <button onClick={()=> setcolor('Green')}
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "Green"}}
          >Green</button>

          <button onClick={()=> setcolor('Black')}
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "Black"}}
          >Black</button>

          <button onClick={()=> setcolor('Blue')} 
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "Blue"}}
          >Blue</button>

          <button onClick={()=> setcolor('Orange')} 
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "Orange"}}
          >Orange</button>

          <button onClick={()=> setcolor('purple')}
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "purple"}}
          >Perple</button>

          <button onClick={()=> setcolor('aqua')}
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "aqua"}}
          >Aqua</button>

          <button onClick={()=> setcolor('grey')}
          className='px-4 py-1 text-white rounded-full shadow-lg outline-none'
          style={{backgroundColor: "grey"}}
          >grey</button>
        </div>
      </div>

    </div>
  )
}

export default App
