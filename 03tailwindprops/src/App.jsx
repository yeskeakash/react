import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let image = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
  return (
    <>
      <Card image={image} />
      <Card />
      <Card />
    </>
  );
}

export default App
