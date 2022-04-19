import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GameResume from '../pages/GameResume'
import Home from '../pages/Home'

function MyRoutes() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/game/resume/:id' element={<GameResume/>} exact/>
    </Routes>
  )
}

export default MyRoutes