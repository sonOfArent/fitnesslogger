import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import './Sessions.css'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Session from './Session/Session'
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'

const Sessions = () => {

  const [filter, setFilter] = useState(null)
  const [filterTitle, setFilterTitle] = useState("Filter")

  const handleSelect = event => {
    const capitalizedEvent = event[0].toUpperCase() + event.substring(1)
    setFilterTitle(capitalizedEvent)

    // #TODO: Currently working on filtering sessions.
    axios.get(`${URL}/sessions`, {
      filter: filter
    })
      .then()
      .catch()
  }

  const handleNavigate = () => {
  }

  return (
    <>
      <Container className='p-4 text-center'>
        <Row>
          <h2>Exercise Sessions</h2>
        </Row>
        <hr />
        <Row>
          <Col>
            <Button>Create Session</Button>
          </Col>
          <Col>
            <DropdownButton
              title={filterTitle}
              className='mb-4'
              id='filterDropdown'
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="today">Today</Dropdown.Item>
              <Dropdown.Item eventKey="week">Week</Dropdown.Item>
              <Dropdown.Item eventKey="all">All</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row >
        <Row className='justify-content-center my-2'>
          <Session />
        </Row>
        <Row className='justify-content-center my-2'>
          <Session />
        </Row>
      </Container >
    </>
  )
}

export default Sessions