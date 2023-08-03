import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <i className='fa-solid fa-utensils fa-bounce me-3'></i>
            Oh my restaurent
          </Navbar.Brand>
        </Container>
      </Navbar>  
    </div>
  )
}

export default Header