import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Cusrom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotheUser ='hello world'

const reactElement =React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click Me to Visit Google',
  anotherElement
)

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement

)
