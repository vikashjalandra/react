import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
let myObj ={
  username:'vikash',
  age:22
}

let myArr =[1,2,2]
  return (
    <>
      <h1 className='bg-green-600 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card channel ='vikash' someObj ={myObj} someArr={myArr} />
      <Card/>

    </>
  )
}

export default App
