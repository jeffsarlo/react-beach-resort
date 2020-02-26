import React from 'react'
import './App.css'

import Home from './pages/Home.js'
import Rooms from './pages/Rooms.js'
import SingleRoom from './pages/SingleRoom.js'
import Error from './pages/Error.js'
import Navbar from './components/Navbar.js'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/rooms/" component={ Rooms } />
        <Route exact path="/rooms/:slug" component={ SingleRoom } />
        <Route component={ Error } />
      </Switch>
    </>
  )
}

export default App
