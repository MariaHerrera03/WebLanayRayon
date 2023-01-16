import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Personalized from './pages/Personalized'
import Christmas from './pages/Christmas'
import Religious from './pages/Religious'
import CartDetailsProvider from './context/useCartDetails'

function App() {

  return (
    <div>
      <CartDetailsProvider>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/personalizados' element={<Personalized/>}/>
          <Route path='/navideños' element={<Christmas/>}/>
          <Route path='/religiosos' element={<Religious/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </BrowserRouter>
      </CartDetailsProvider>

    </div>
  )
}

export default App
