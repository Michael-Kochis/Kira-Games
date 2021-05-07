import '../App.css'
import React, {useState} from 'react'
import {Alert, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {CenteredContainer} from './CenteredContainer'
import {useAuth} from './context/authContext'

function Profile() {
    const {currentUser, logout } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();
    
    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push("/login");
        } catch {
            setError('Failed to log out.');
        }
    }

    return (
        <CenteredContainer id="profile">
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser && currentUser.email}
            <p>Profile</p>
            <Link to="/update-profile" className="center w-40"><Button className="btn center">Update Profile</Button></Link>
            <Link to="/" className="center w-40"><Button className="btn center">Games</Button></Link>
            <Button onClick={handleLogout} className="btn center">Log Out</Button>
        </CenteredContainer>
    );
}

export {
    Profile
}