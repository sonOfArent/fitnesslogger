import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import './App.css';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

// router-dom
import { Route, Routes, Link } from 'react-router-dom'

// urls
import Home from './urls/Home/Home';
import Profile from './urls/Profile/Profile'
import Login from './urls/Login/Login';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(fetchFromLocalStorage())
  }, [])

  const fetchFromLocalStorage = () => {
    return null
  }

  if (!user) {
    return (
      <Login user={user} setUser={setUser} />
    )
  }

  return (
    <div className="App">
      <Navbar bg='dark' variant='dark' className='py-3'>
        <Container>
          <Navbar.Brand>
            Fitness Logger
          </Navbar.Brand>
          <Nav>
            <Navbar.Text className='nav-link'>
              <Link to={'/'}>Home</Link>
            </Navbar.Text>
            <Navbar.Text className='nav-link'>
              <Link to={'/sessions'}>Sessions</Link>
            </Navbar.Text>
            <Navbar.Text className='nav-link'>
              <Link to={'/profile'}>Profile</Link>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/profile' element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
