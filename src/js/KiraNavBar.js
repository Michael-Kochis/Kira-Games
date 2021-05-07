import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Navbar } from 'react-bootstrap'
import {useAuth} from './context/authContext'

function KiraNavBar() {
    let logout = useAuth().logout;

    function logOut() {
        console.log(logout);
        logout();
    }

    return (
        <Navbar className="navbar-kira" bg="light" expand="sm">
            <Link to="/" className="center w-40"><Button className="btn center">Home</Button></Link>
            <Link to="/" className="center w-40"><Button className="btn center">Games</Button></Link>
            <Link to="/user" className="center w-40"><Button className="btn center">Profile</Button></Link>
            <Button className="center w-40" onClick={logOut}>Exit</Button>
        </Navbar>
    )
}

export {
    KiraNavBar
}
