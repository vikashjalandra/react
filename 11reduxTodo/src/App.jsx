import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <>
    <h1>Todos</h1>
    <AddTodo/>
    <Todos/>
     </>
  )
}

export default App
