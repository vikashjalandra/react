import Chai from "./chai"

function App() {
  const username ='chai or code'

  return (
    <>
      <Chai />
      <h1>chai {username}</h1>    {/* {} -- is evaluated expression */}
    </>
  )
}

export default App
