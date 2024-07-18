import Rect, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

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
      <div className='min-h-screen flex flex-wrap content-between '>
        <div className='w-full block'>
          <Header/>
          <main
          style={{height:'94%'}}
          className='flex flex-col justify-center align-middle'
           >
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    )
  } else{
    return (
      <>
        <span class="loader"></span>
  
      </>
    )
  }
}

export default App
