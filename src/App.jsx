// import { useState } from 'react'


import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'


function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
         <Navbar/>
         <Home/>
         <About/>
         <Portfolio/>
      </div>
  )
}

export default App
