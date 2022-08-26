import React from 'react'
import Card from 'react-bootstrap/Card'

const StatCard = ({ stat, children }) => {
  return (
    <Card>
      <Card.Header className='h1'>{stat || 'NaN'}</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  )
}

export default StatCard