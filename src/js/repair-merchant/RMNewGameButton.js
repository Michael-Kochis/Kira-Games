import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import '../../App.css'
import {useAuth} from '../context/authContext'
import {firestore} from '../firebase'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

function RMNewGameButton() {
    const {currentUser} = useAuth();
    const [modalOpen, setModalOpen] = useState();
    const [name, setName] = useState();

    function closeModal() {
        setName("");
        setModalOpen(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        firestore.collection("Persona").doc(`${currentUser.uid}`).collection("Games").doc(name).set({name: name,
            game: "Repair Merchant",
            XP: 0,
            honor: 100,
            coins: {gold: 0, silver: 0, copper: 0, tin: 0},
            debentures: {gold: 0, silver: 0, copper: 0, tin: 0},
            skills: {leather:3, lumber: 3, smith: 3},
            story: {}
        });

        setName("");
        closeModal();
    }

    function openModal() {
        setModalOpen(true);
    }

    return (
        <div>
            <Modal show={modalOpen} onHide={closeModal} className="modal-top">
                <Form onSubmit={handleSubmit} className="w-40 d-flex justify-content-center align-items-center">
                    <Modal.Body className="d-flex justify-content-center align-items-center">
                        <Form.Group className="d-flex justify-content-center align-items-center">
                            <Form.Label className="rt-2">Avatar Name</Form.Label>
                            <Form.Control type="text" required value={name}  
                                className="rt-2 tall-2" onChange={e => setName(e.target.value)}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className="d-flex">
                        <Button variant="secondary" onClick={closeModal} >Close</Button>
                        <Button variant="success" type="submit" >New Repair Merchant</Button>
                        </Modal.Footer>
                </Form>
            </Modal>
            <Button id="new-game-rm" className="no-blue" onClick={openModal} variant="outline-success" size="sm">
                <FontAwesomeIcon icon={faPlusSquare} />
            </Button>
        </div>
    )
}

export {
    RMNewGameButton
}
