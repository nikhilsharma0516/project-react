import { useState } from 'react'
import { Navbar } from './Navbar'
import { Route,Routes} from 'react-router'
import { About } from "./Navbar_options/About";
import { Menu } from "./Navbar_options/Menu";
import { Contact } from "./Navbar_options/Contact";    
import { Location } from "./Navbar_options/Location";
import { Login } from "./Navbar_options/Login";    
import { Home } from "./Home";  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/location" element={<Location />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
