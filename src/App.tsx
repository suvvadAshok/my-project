import { useState } from 'react'
import './App.css'
import React from 'react'
import { Home } from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
      
    </>
  )
}

export default App
