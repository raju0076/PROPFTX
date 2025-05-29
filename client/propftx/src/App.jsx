import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieCard } from './components/MovieCard'
import { Navbar } from './components/NavBar'



function App() {

  return (
    <>
    <Navbar/>
     <MovieCard/>
    </>
  )
}

export default App
