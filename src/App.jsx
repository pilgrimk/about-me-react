import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {
  Navbar,
  Footer
} from './components'
import { Home } from './pages'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App