import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/logo.png";

function NavBar() {
  return (
    <Navbar bg="black" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        <Image src={Logo} appendLeft />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
          <NavDropdown title="Catalogo de productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Nails</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Maquillaje</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cabinas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Kits</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">¡SALE!</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <div className="mx-4">
        <CartWidget />
      </div>
    </Navbar>
  );
}

export default NavBar;
