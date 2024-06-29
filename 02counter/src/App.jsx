import { useState } from 'react';

import './App.css'

function App() {
  let [counter,setCounter] =useState(15)

  const addValue =()=>{
    if (counter<20) {
      setCounter(++counter)
    }
  }

const removeValue =()=>{
  if (counter>0) {
    setCounter(--counter)
  }
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


// assignment - value dont decrease after 0 and value dont increase after 20   - completed