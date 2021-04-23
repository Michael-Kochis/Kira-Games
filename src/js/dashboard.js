import '../App.css'
import React, {useState} from 'react'
import {Alert, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from './context/authContext'

function Dashboard() {
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
        <div id="dashboard-main">
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser && currentUser.email}
            <p>Dashboard</p>
            <Link to="/update-profile" className="center w-100"><Button onclick="" classNAme="btn center">Update Profile</Button></Link>
            <Button onClick={handleLogout} className="btn center">Log Out</Button>
        </div>
    );
}

export {
    Dashboard
}