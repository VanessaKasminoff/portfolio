import About from "./components/About.jsx";
import Landing from "./components/Landing.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";


function App() {

  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>

  )
}

export default App
