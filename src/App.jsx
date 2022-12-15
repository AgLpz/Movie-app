import { useState } from 'react'
import './assets/styles/App.css'
import Home from './components/Home'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Home/>
      </div>

  
    </div>
  )
}

export default App
