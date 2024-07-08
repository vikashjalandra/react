import './App.css'
import Rect, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))        
      } else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  
  if (loading) {
    return (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        Loading
      </div>
    )
  } else{
    return (
      <>
        <h1>Blog With AppWrite</h1>
  
      </>
    )
  }
}

export default App
