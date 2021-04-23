import React, {useRef, useState} from 'react'
import {Alert, Button, Card, Form} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import '../App.css';
import { useAuth } from './context/authContext'

function ForgotPassword() {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const [error, setError] = useState('');

    async function handlePasswordReset(e) {
        e.preventDefault()
              
            try {
                setError("");
                setMessage('');
                setLoading(true);
                await resetPassword(emailRef.current.value);
                setMessage('Check your inbox for further instructions.')
            } catch {
                setError("Failed to reset password.");
            }
        
        setLoading(false)
      }
        
        return (
        <div className="login">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <p>{message}</p>}
                    <Form className="center text-center" onSubmit={handlePasswordReset} >
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Button disabled={loading} type="submit" className="button-pw-reset">Reset Password</Button>
                        </Form.Group>
                        <p><Link to="/login">Log In</Link></p>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export {
    ForgotPassword
}