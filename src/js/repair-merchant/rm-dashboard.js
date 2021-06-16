import React from 'react'
import { Container } from 'react-bootstrap'
import {KiraNavBar} from '../KiraNavBar'
import RMNewGameButton from './RMNewGameButton'
import { UseMerchant } from '../context/useMerchant'

function RMDashboard() {
    
    return (
        <Container fluid="sm">
            <KiraNavBar className="w-100" />
                <UseMerchant>fail</UseMerchant>
            <RMNewGameButton className="center"/>
        </Container>
    )   
}

export {
    RMDashboard
}
