import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


import './Sessions.css'
import Session from './Session/Session'

import axios from 'axios'

const Sessions = ({ user }) => {

  const [filter, setFilter] = useState(null)
  const [filterTitle, setFilterTitle] = useState("Filter")

  const handleSelect = event => {
    setFilter(event)
    const capitalizedEvent = event[0].toUpperCase() + event.substring(1)
    setFilterTitle(capitalizedEvent)

    // #TODO: Currently working on filtering sessions.
    // My idea is to send the user ID over, find the sessions associated with the ID, and then find the ones that match the filter date-wise.
    axios.post(`${URL}/sessions`, {
      _id: user._id,
      filter: filter
    })
      .then()
      .catch(err => console.log(err))
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
            <LinkContainer to="/sessions/create">
              <Button>Create Session</Button>
            </LinkContainer>
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