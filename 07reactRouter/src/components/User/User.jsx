import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} =useParams()
  return (
    <div className='bg-gray-600 text-center text-white text-3xl'>
      User: {id}
    </div>
  )
}

export default User
