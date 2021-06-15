import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import '../../App.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import  MerchantForm  from './merchant-form'
import { merchantName, merchantSave } from '../actions/merchantActions'

function RMNewGameButton(props) {
    const [modalOpen, setModalOpen] = useState();
    const [name, setName] = useState();

    function closeModal() {
        setName("");
        setModalOpen(false);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.merchantName(name);
        props.merchantSave();
    }

    function openModal() {
        setModalOpen(true);
    }

    return (
        <div>
            <Modal show={modalOpen} onHide={closeModal} className="modal-top">
                <Form onSubmit={handleSubmit} className="w-40 d-flex justify-content-center align-items-center">
                    <Modal.Body className="d-flex justify-content-center align-items-center">
                        <MerchantForm setName={setName}></MerchantForm>
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

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {merchantName, merchantSave})(RMNewGameButton)
