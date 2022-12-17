import React from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import './home.css'
function ColorSchemesExample() {
  return (
    <div>
       <>
       <Navbar className='main-nav'>
        <Container>
          <Navbar.Brand className='home' href="#home">Wednesday</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    </div>
  )
}
export default ColorSchemesExample;