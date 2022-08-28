import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

// router-dom
import { Route, Routes, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

// urls
import Home from './urls/Home/Home';
import Profile from './urls/Profile/Profile'
import Login from './urls/Login/Login';
import Sessions from './urls/Sessions/Sessions';
import CreateSession from './urls/Sessions/CreateSession/CreateSession';

const LOGINURL = "http://localhost:5000/login"

function App() {

  const [user, setUser] = useState(null)
  const [loginModalShow, setLoginModalShow] = useState(false)

  useEffect(() => {
    fetchFromLocalStorage()
  }, [])

  const fetchFromLocalStorage = async () => {
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    if (username !== null && password !== null)
      setLoginModalShow(true)

    if (username !== null && password !== null) {
      await axios.post(LOGINURL, {
        username: username,
        password: password
      })
        .then(res => {
          setUser(res.data)
          setLoginModalShow(false)
        })

    }
  }

  if (!user) {
    return (
      <>
        <Modal show={loginModalShow} centered>
          <Modal.Header className='lead'>Signing in...</Modal.Header>
        </Modal>
        <Login user={user} setUser={setUser} setLoginModalShow={setLoginModalShow} />
      </>
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
            <LinkContainer to={'/'}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/sessions'}>
              <Nav.Link>Sessions</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/profile'}>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser} />} />
        <Route path='/sessions' element={<Sessions />} user={user} />
        <Route path='/sessions/create' element={<CreateSession user={user} />} />
      </Routes>
    </div >
  );
}

export default App;
