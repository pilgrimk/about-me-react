import React from 'react'
import {
  Navbar
} from './components'
import {
  About,
  Footer,
  Projects,
  WorkHistory
} from './pages'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <WorkHistory />
      <Footer />
    </div>
  )
}

export default App