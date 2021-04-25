import {React} from 'react'
import {Container} from 'react-bootstrap'

function CenteredContainer({children}) {
    return(
        <Container className="d-flex align-items-center justify-content-center">
            {children}
        </Container>
    )
}

export {
    CenteredContainer
}