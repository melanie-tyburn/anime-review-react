import { Navbar, Nav, Container, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaUser, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar expand="lg" collapseOnSelect className='bg-dark border-bottom border-dark'>
      <Container>
      <Navbar.Brand href="/">
        <img id="logo"
          src="../src/assets/logo-title-bg.png"
          alt="Logo"
          className="rounded border border-dark"

        />
      </Navbar.Brand>
      
      <Col className='text-light slogan'>
        Crée ta propre bibliothèque d'animes déjà vus et partage-la avec tes amis !
      </Col>

      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FaBars className="icon" />
      </Navbar.Toggle>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex flex-row-reverse w-auto ps-2">
        <Nav.Link as={Link} to="/login">
          <FaUser className="me-2" />Profil
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;