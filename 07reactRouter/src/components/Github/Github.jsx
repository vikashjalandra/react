import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/vikashjalandra') 
  //   .then(response=>response.json())
  //   .then(data=> {
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='text-center m-4 bg-green-600 text-white p-4 text-3xl align-middle justify-center'>
      Github Followers : {data.followers}
      <img className='align-middle' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
export const githubInfoLoader =async()=>{
  const response =await fetch('https://api.github.com/users/vikashjalandra')
  return response.json()
}
