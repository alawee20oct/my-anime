import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar, Nav } from 'react-bootstrap';


function Header() {
  return (
    <>
        <section>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Collapse className="justify-content-between">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="#">Home</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="#">Watching</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Will Watch</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Watched</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="#">Setting</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                    <Navbar.Toggle className="me-3" aria-controls="responsive-navbar-nav" />
            </Navbar>
        </section>
    </>
  )
}

export default Header;