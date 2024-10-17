import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 0
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    console.log(counter)
  }

  const decrement = () => {
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
      <h1>React Counter Application</h1>
      <h2>Counter : {counter} </h2>
      <button onClick={increment}>Icrement</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <p>footer</p>
    </>

  )
}

export default App
