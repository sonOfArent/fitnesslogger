import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// mine
import StatCard from '../../components/StatCard/StatCard'

const Home = ({ user }) => {

  const navigate = useNavigate()

  const USER = {
    name: "Exodus",
    sessionsToday: 1,
    minutesToday: 30
  }

  return (
    <>
      <Container className='px-5 pt-5 text-center'>
        <h3 className='mb-5'>Welcome, {user.username}!</h3>
        <Row>
          <Col>
            <StatCard stat={user.sessionsToday}>
              Sessions Today
            </StatCard>
          </Col>
          <Col>
            <StatCard stat={user.minutesToday}>
              Minutes Today
            </StatCard>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <StatCard stat={user.sessionsWeek}>
              Sessions this week
            </StatCard>
          </Col>
          <Col>
            <StatCard stat={user.minutesWeek}>
              Minutes this week
            </StatCard>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      <Container className='px-5 text-center'>
        <Row className=''>
          <Col>
            <Button size='lg' onClick={() => navigate('/sessions')}>Add Session</Button>
          </Col>
          <Col>
            <Button size='lg' variant='info'>View Profile</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home