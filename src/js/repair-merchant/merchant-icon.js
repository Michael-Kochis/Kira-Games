import React from 'react'
import styled from 'styled-components'
import {useMerchant} from '../context/merchantContext'

function MerchantIcon(props) {
    const Outline = styled.div `
        border: 2px solid navy;
        color: navy;
        background-color: transparent;
        width: 50%;
    `
    const {currentMerchant } = useMerchant();

    const dragStart = (event) => {
        const target = event.target;
        console.log("Dragging: "+ event.target.id);

        event.dataTransfer.setData('id', target.id);
    }

    const dragOver = (event) => {
        event.stopPropagation();
    }

    return (
        <Outline
            id={currentMerchant.name}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable="true"
        >
            {currentMerchant.name}
        </Outline>
    )
}

export {
    MerchantIcon
}