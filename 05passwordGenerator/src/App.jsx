import { useState, useCallback,useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  // useRef hook
  const passwordRef = useRef(null)


  const passwordGenegrator = useCallback(() => {
  
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '~!@#$%^&*()_+=-{}[]'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPassword =useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3) 
    window.navigator.clipboard.writeText(password) 
  },[password])

useEffect(()=>{
  passwordGenegrator()
},[length,numAllowed,charAllowed,passwordGenegrator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} ref={passwordRef} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" className='cursor-pointer' min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} />
            <label >Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id='numInput' onChange={()=>{setNumAllowed((prev)=> !prev)}} />
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{setCharAllowed((prev)=> !prev)}} />
            <label>Charaters</label>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
