import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] =  useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/IamdebashisD")
    //     .then(response => response.json())
    //     .then( data =>{
    //         console.log(data)
    //         setData(data)
    //     })

    // }, [])
    const data = useLoaderData()

  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Profile" width={300} height={300} 
        className="w-full h-auto max-w-[300px] rounded-full"
        srcSet={`${data.avatar_url} 1x, ${data.avatar_url}&s=600 2x`}
        />
        <h2>username: {data.name || "not specified"}</h2>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/IamdebashisD")
    return response.json()
}