import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlaceholderDataDetails from './components/PlaceholderDataDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts/:postId' element={<PlaceholderDataDetails />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
