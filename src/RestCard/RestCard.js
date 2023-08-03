import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCard({restaurants}) {
    console.log(restaurants);
  return (
    <>
    <Link to={`/view/${restaurants.id}`}>
    <Card className='restaurant-card'>
        <Card.Img variant="top" src={restaurants.photograph} />
        <Card.Body>
          <Card.Title>{restaurants.name}</Card.Title>
          <Card.Text>
            {restaurants.address}
          </Card.Text>
        </Card.Body>
      </Card>
    
    </Link>
   
    </>
  )
}

export default RestCard