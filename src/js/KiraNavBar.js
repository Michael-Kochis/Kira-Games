import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

function KiraNavBar() {
    return (
        <Navbar className="navbar-kira" bg="light" expand="sm">
            <Navbar.Brand as={Link} to="/">
                Home
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user">
                Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export {
    KiraNavBar
}
