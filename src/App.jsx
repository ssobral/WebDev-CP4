import { } from 'react'
import Nav from './Nav'
import Home from './Home'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Footer from './Footer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Produtos" element={<Produtos/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
