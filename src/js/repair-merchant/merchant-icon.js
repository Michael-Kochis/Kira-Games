import React from 'react'
import styled from 'styled-components'
import {useMerchant} from '../context/merchantContext'

function MerchantIcon(props) {
    const Outline = styled.div `
        border: 2px solid navy;
        color: navy;
        background-color: transparent;
        width: 50%;
        order: -5;
    `
    const {currentMerchant } = useMerchant();

    const dragEnd = (event) => {
        const target = event.target;
        target.draggable = false;
        setTimeout(() => {target.draggable = true}, 5000);
    }

    const dragStart = (event) => {
        const target = event.target;

        event.dataTransfer.setData('id', target.id);
    }

    const dragOver = (event) => {
        event.stopPropagation();
    }

    return (
        <Outline
            id={currentMerchant.name}
            onDragEnd={dragEnd}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable="true"
            className="merchant worker"
        >
            {currentMerchant.name}
        </Outline>
    )
}

export {
    MerchantIcon
}