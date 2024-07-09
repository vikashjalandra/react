import './App.css'
import Rect, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Footer, Header } from './components'

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
  
  if (!loading) {
    return (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header/>
          <main>
            Todo: {/* <Outlet/> */}
          </main>
          <Footer/>
        </div>
      </div>
    )
  } else{
    return (
      <>
        <h1>Loading</h1>
  
      </>
    )
  }
}

export default App
