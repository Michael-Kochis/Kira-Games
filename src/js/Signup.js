import React, {useRef} from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import '../App.css';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const password2Ref = useRef();
    return (
        <div class="signup">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    <Form className="center text-center">
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
                            <Button type="submit" className="button-register">Register</Button>
                        </Form.Group>
                        <p>Already have an account?  Log In</p>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export {
    Signup
}