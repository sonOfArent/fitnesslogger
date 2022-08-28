import React from 'react'

import Card from 'react-bootstrap/Card'

const Session = () => {
  return (
    <Card className='w-75'>
      <Card.Header>
        Session Date Here
      </Card.Header>
      <Card.Body>
        Session Description Here
      </Card.Body>
      <Card.Footer className='text-muted'>
        X upper-body, X lower-body
      </Card.Footer>
    </Card>
  )
}

export default Session