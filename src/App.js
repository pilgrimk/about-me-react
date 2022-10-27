import React from 'react'
import {
  Navbar
} from './components'
import {
  About,
  Footer,
  Home,
  Projects,
  WorkHistory
} from './pages'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <WorkHistory />
      <Footer />
    </div>
  )
}

export default App