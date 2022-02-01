import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

const Header = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="/">Bank of Spain</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/customers">Customers</Nav.Link>
                    <Nav.Link href="/transactions">Transactions</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Like</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Follow
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
};

export default Header;
