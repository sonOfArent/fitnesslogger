import React from 'react'
import './Profile.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Profile = ({ user, setUser }) => {

  return (
    <Container>
      <Card className='m-5 text-center'>
        <Card.Header>
          <Row className='justify-content-center'>
            <Card.Img src={user.pfp} className='mb-3' style={{ width: "100px" }} />
          </Row>
          <Row>
            <Card.Text>{user.username}</Card.Text>
            <hr />
            <Card.Text>{user.email}</Card.Text>
          </Row>
        </Card.Header>
      </Card>
      <Button onClick={() => setUser(null)}>Log Out</Button>
    </Container>
  )
}

export default Profile