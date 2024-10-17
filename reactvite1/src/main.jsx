import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type : 'a',
  props : { 
      href : "https://youtube.com",
      target : '_blank'
  },
  children : 'Click Here'
}


function MyApp(){
  return(
    <div>
      <h1>Welcome to my website</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://youtube.com" target="_blank">YOUTUBE</a>
)



createRoot(document.getElementById('root')).render(
  // AnotherElement
  <App/>
)
