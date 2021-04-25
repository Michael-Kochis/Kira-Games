import React, {useRef, useState} from 'react'
import {Alert, Button, Card, Form} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import '../../App.css';
import { CenteredContainer} from '../CenteredContainer'
import { useAuth } from '../context/authContext'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault()
              
            try {
                setError("");
                setLoading(true);
                await login(emailRef.current.value, passwordRef.current.value);
                history.push("/");
            } catch {
                setError("Failed to log in.");
            }
        
        setLoading(false)
      }
        
        return (
        <CenteredContainer>
            <div className="login">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form className="center text-center" onSubmit={handleLogin} >
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group>
                                <Button disabled={loading} type="submit" className="button-register">Log In</Button>
                            </Form.Group>
                            <p>Need an account?  <Link to="/register">Register</Link></p>
                        </Form>
                        <Link to="/forgot-password" className="mt-3">Forgot Password?</Link>
                    </Card.Body>
                </Card>
            </div>
        </CenteredContainer>
    )
}

export {
    Login
}