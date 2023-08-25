import { Button, Container, Form, Nav, NavDropdown, NavBar } from "react-boostrap" 

const Navbar = () => {
    return (
      <NavBar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavBar.Brand href="#">Navbar scroll</NavBar.Brand>
        <NavBar.Toggle aria-controls="navbarScroll" />
        <NavBar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </NavBar.Collapse>
      </Container>
    </NavBar>
   )
   }

   export default NavBar
