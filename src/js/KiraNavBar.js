import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Navbar } from 'react-bootstrap'

function KiraNavBar() {
    return (
        <Navbar className="navbar-kira" bg="light" expand="sm">
            <Link to="/" className="center w-40"><Button className="btn center">Home</Button></Link>
            <Link to="/user" className="center w-40"><Button className="btn center">Profile</Button></Link>
        </Navbar>
    )
}

export {
    KiraNavBar
}
