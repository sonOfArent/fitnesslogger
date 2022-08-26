import React from 'react'
import './Profile.css'

import { Card } from 'react-bootstrap'

const Profile = ({ user }) => {

  if (!user) {
    return (
      <>
        Please log in!
        Also, future me, put in a redirect here to the login screen
      </>
    )
  }

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Img src='' />
        </Card.Header>
      </Card>
    </>
  )
}

export default Profile