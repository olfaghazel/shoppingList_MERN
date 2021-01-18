import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" className="mb-5">
        <Container>
          <Navbar.Brand href="/">Shopping List</Navbar.Brand>
          <Navbar.Toggle onClick={toggle} />
          <Navbar.Collapse onOpen={isOpen}></Navbar.Collapse>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link href="https://github.com/olfaghazel">Guithub</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
