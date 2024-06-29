import { useState } from 'react';

import './App.css'

function App() {
  let [counter,setCounter] =useState(15)

  const addValue =()=>{
    setCounter(++counter)
  }

const removeValue =()=>{
  setCounter(--counter)
}
  
  return (
    <>
    <h1>Hello World</h1>
    <h2>Counter Value:{counter}</h2>

    <button onClick={addValue}>Add Value</button> <br /> <br />
    <button onClick={removeValue}>Remover Value</button>
    </>
  )
}

export default App
