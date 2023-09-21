import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navBar.css"
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Navbar expand="lg" className="background"> 
      <Container>
        <Navbar.Brand href="#home" className='logo-text'><span id='get'>get</span><span id='linked'>linked</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-links' href="#home">Timeline</Nav.Link>
            <Nav.Link className='nav-links' href="#link">Overview</Nav.Link>
            <Nav.Link className='nav-links' href="#home">FQAs</Nav.Link>
            <Nav.Link className='nav-links' href="#link">Contact</Nav.Link>
          </Nav>
          <Button variant="contained" className='button' >Contained</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;