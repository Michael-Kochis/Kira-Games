import React from 'react'
import {Button} from 'react-bootstrap'
import '../../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

function RMNewGameButton() {

    function openModal() {}

    return (
        <Button id="new-game-rm" className="no-blue" onClick={openModal} variant="outline-success" size="sm">
            <FontAwesomeIcon icon={faPlusSquare} />
        </Button>
    )
}

export {
    RMNewGameButton
}
