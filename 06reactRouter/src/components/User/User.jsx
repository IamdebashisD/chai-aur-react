import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='p-4 text-3xl text-white bg-gray-600'>User: {userId}</div>
  )
}

export default User