import '../../App.css'
import React, {useRef, useState} from 'react'
import {Alert, Button, Card, Form} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import { CenteredContainer} from '../CenteredContainer'
import { useAuth } from '../context/authContext'

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const password2Ref = useRef();
    const {register} = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault()
              
        if (passwordRef.current.value !== password2Ref.current.value) {
          return setError("Passwords do not match")
        }
    
            try {
                setError("");
                setLoading(true);
                await register(emailRef.current.value, passwordRef.current.value);
                history.push("/");
            } catch {
                setError("Failed to create an account");
            }
        
        setLoading(false)
      }
        
        return (
        <CenteredContainer>
            <div className="signup">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Register</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form className="center text-center" onSubmit={handleRegister} >
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={password2Ref} required />
                            </Form.Group>
                            <Form.Group>
                                <Button disabled={loading} type="submit" className="button-register">Register</Button>
                            </Form.Group>
                            <p>Already have an account?  <Link to="/login">Log In</Link></p>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </CenteredContainer>
    )
}

export {
    Signup
}