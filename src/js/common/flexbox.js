import React from 'react'
import styled from 'styled-components'

function FlexBox(props) {
    const BoxArea = styled.div`
        border-radius: 1rem;
        background-color: ${props.color};
        color: black;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        min-height: 3rem;
    `

    return (
        <BoxArea>
            {props.children}
        </BoxArea>
    )
}

export {
    FlexBox
}
