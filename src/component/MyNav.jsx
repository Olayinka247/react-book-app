import { Navbar, Nav } from "react-bootstrap";

const MyNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="#home">🥇StriveBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href="#deets">Home</Nav.Link>
        <Nav.Link href="#memes">About</Nav.Link>
        <Nav.Link href="#browse">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default MyNav;
