import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ChatBot from './components/ChatBot'
import ContactSection from './components/ContactSection'
const App = () => {
  return (
  <>
  <Navbar/>
  <ChatBot/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  </Routes>
  </>
  )
}

export default App