import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    return (
        <>
            <Navbar expand="md" bg="light" variant="light" fixed="top">
                <Container fluid>
                    <Navbar.Toggle className="" aria-controls="header-nav"/>
                    <Navbar.Offcanvas id="header-nav" aria-labelledby="title-nav" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="title-nav">MENU</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="justify-content-between">
                            <Nav>
                                <Nav.Item>
                                    <Link to="/" className="nav-link d-flex align-items-center">
                                        <i className="bi bi-house-door-fill text-dark fs-4 me-2"></i>
                                        <Navbar.Text className="d-md-none">Home</Navbar.Text>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                            <hr className="d-md-none"/>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="#" className="d-flex align-items-center">
                                        <i className="bi bi-play-btn-fill text-danger fs-4 me-2"></i>
                                        <Navbar.Text className="d-md-none">Now Watching</Navbar.Text>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#" className="d-flex align-items-center">
                                        <i className="bi bi-pin-angle-fill text-primary fs-4 me-2"></i>
                                        <Navbar.Text className="d-md-none">Will Watch</Navbar.Text>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#" className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
                                        <Navbar.Text className="d-md-none">Already Watched</Navbar.Text>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <hr className="d-md-none"/>
                            <Nav>
                                <Nav.Item >
                                    <Link to="/setting" className="nav-link d-flex align-items-center">
                                        <i className="bi bi-gear-fill text-dark fs-4 me-2"></i>
                                        <Navbar.Text className="d-md-none">Setting</Navbar.Text>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;