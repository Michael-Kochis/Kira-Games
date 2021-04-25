import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'

function KiraNavBar() {
    return (
        <Navbar bg="light" expanded="sm">
            <Navbar.Brand as={Link} to="/">
                Home
            </Navbar.Brand>
            <Nav.Link as={Link} to="/user">Profile</Nav.Link>
        </Navbar>
    )
}

export {
    KiraNavBar
}
