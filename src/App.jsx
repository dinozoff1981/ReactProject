
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolia/Portfolio'
import Contact from './components/Contact/Contact'
import { Routes, Route} from 'react-router-dom'



function App() {


  return (
    
<>

   

<Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    <Footer />
    </>
  
  
  )
}

export default App
