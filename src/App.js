import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Prototype from './pages/prototype/Prototype'
import './App.scss'

const App = () => {

  useEffect(() => {
    // Redirect all the paths to prototype, until UI completed
    if (window.location.pathname !== "/prototype") {
      window.location.href = "/prototype"
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/prototype"
            element={<Prototype />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App