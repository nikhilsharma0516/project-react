import { useState } from 'react'
import { Navbar } from './Navbar/Navbar'
import { Hero } from './Contact/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default App
