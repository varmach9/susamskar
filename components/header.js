import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./eventStyle.module.css"

function Mynavbar() {
    
  return (
    
    <Navbar style={{background: "black" }} expand="lg" variant='dark' fixed='top'>
      <Container style={{color:"white"}}>
        <Navbar.Brand href="#home" ><img src="/images/navbarlogo.png" alt="mail"className='logoimg'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav "/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/" >Home</Nav.Link>
            <NavDropdown title=" Who we are" id="collasible-nav-dropdown" className='e-carat-hide' >
              <NavDropdown.Item href="/about" >About Us</NavDropdown.Item>
              <NavDropdown.Item href="/our-team" >Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/advisory-board" >Advisory Board</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title= "What we do" id="collasible-nav-dropdown" style={{fontSize:"4rem !important"}} >
              <NavDropdown.Item href="/activities/value-education" >Rekindling Hearts - Value education for children</NavDropdown.Item>
              <NavDropdown.Item href="/activities/parents-workshop" >Parent's Workshop</NavDropdown.Item>
              <NavDropdown.Item href="/activities/youth-empowerment" >Youth Empowerment Program</NavDropdown.Item>
              <NavDropdown.Item href="/activities/counselling" >Counselling</NavDropdown.Item>
              <NavDropdown.Item href="/activities/teacher's-seminar" >Teachers Seminar</NavDropdown.Item>
              <NavDropdown.Item href="/activities/mentor's-forum" >Mentor's Forum</NavDropdown.Item>
              <NavDropdown.Item href="/activities/wealthy-hearts" >Wealthy Hearts</NavDropdown.Item>
              <NavDropdown.Item href="/activities/green-village" >Green Village</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Support us" id="collasible-nav-dropdown"  >
              <NavDropdown.Item href="/get-involved" >Get Involved</NavDropdown.Item>
              <NavDropdown.Item href="/donate" >Donate</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/gallery" >Gallery</Nav.Link>
            <Nav.Link href="/contact-us" >Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;