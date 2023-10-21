import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Support from './Components/Support'
import Labs from './Components/Labs'
import NotFouund from './Components/NotFound'
import { Link,NavLink } from 'react-router-dom'
import MainHeader from './Components/MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <nav>
    <ul>
      <li>
        <NavLink to = "/">Home</NavLink>
      </li>
      <li>
        <NavLink to = "/about">About</NavLink>
      </li>
      <li>
        <NavLink to = "/support">Support</NavLink>
      </li>
      <li>
        <NavLink to = "/labs">Labs</NavLink>
      </li>
    </ul>
  </nav>



  <Routes>
    <Route path="/" element={<MainHeader/>}>
    <Route index element={<Home/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/labs" element={<Labs/>}/>
    <Route path="*" element={<NotFouund/>}/>
    </Route>
    
  </Routes>
 </div>
  )
}

export default App
