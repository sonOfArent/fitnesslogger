import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Login.css'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'

const NEWUSERURL = "http://localhost:5000/login"

const Login = ({ user, setUser }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [regEmail, setRegEmail] = useState('')
  const [regUsername, setRegUsername] = useState('')
  const [regPassword, setRegPassword] = useState('')

  const [modalShow, setModalShow] = useState(false)

  const handleCreateAccount = () => {

    console.log("It's being handled.")

    axios.post(NEWUSERURL, {
      regEmail: regEmail,
      regUsername: regUsername,
      regPassword: regPassword
    })
      .then((res) => console.log("Successful post! ", res))
      .catch(err => console.error(err))

    console.log("it's finished handling")
  }

  return (
    <div className='login'>
      <Container className='center'>
        <Form className='mx-5 text-center align-items-center'>
          <Row>
            <h2 className='my-4'>
              Login to use Fitness Tracker
            </h2>
          </Row>
          <Row>
            <Form.Group>
              <Form.Control type='text' placeholder='Username' onChange={event => setUsername(event.target.value)} />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Control type='password' placeholder='Password' onChange={event => setPassword(event.target.value)} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Text>
              No account? <Button size='sm' onClick={() => setModalShow(true)}>Create one here!</Button>
            </Form.Text>
          </Row>
          <Button size='lg' variant='success' className='my-3' onClick={() => console.log(username)}>Log In</Button>
        </Form>
      </Container>

      <Modal show={modalShow} onHide={() => setModalShow(false)} centered backdrop='static' keyboard='false'>
        <Modal.Header closeButton>
          Create Account
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type='email' placeholder='email@example.com' onChange={event => setRegEmail(event.target.value)} />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Control type='text' placeholder='Create Username' onChange={event => setRegUsername(event.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Control type='password' placeholder='Create Password' onChange={event => setRegPassword(event.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='info' onClick={handleCreateAccount}>Register Account</Button>
        </Modal.Footer>
      </Modal>
    </div >
  )
}

export default Login