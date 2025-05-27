import { useCallback, useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import './App.css'


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [postId, setPostId] = useState(Math.floor(Math.random() * 100 + 1))
  
  

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
   

    .then((response)=>{
      if(!response.ok) throw new Error('Failed to fetch')
        return response.json()
    })
    .then((json) => {
      setData(json)
      setLoading(false)
      console.log(postId);
    })
    .catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [postId])
  

  if(loading) return <p>Loading...</p>
  if(error)  return <p>Error: {error}</p>

  const getRandomId = () => Math.floor(Math.random() * 100 + 1);

  return (
    <div>
      <h1>Random API call</h1>

      <div>
        <h2>
        {data?.title}
        </h2>
      </div>
      
      <br />
      
      <div>
        <Button className="rounded-full" 
        onClick={()=> setPostId(getRandomId()) } >
          Refresh
        </Button>
      </div>

    </div>
  )
}

export default App
