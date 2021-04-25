import React from 'react'
import {Container} from 'react-bootstrap'
import {KiraNavBar} from '../KiraNavBar'
import {RMNewGameButton} from './RMNewGameButton'

export default function RMDashboard() {
    return (
        <>
            <Container fluid="sm">
                <KiraNavBar className="w-100" />
                <RMNewGameButton className="center"/>
            </Container>
        </>
    )
}

export {
    RMDashboard
}
