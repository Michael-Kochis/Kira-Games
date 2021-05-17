import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../common/flexbox'

function Cart() {
    const CartBox = styled.div `
        display: flex;
        flex-flow: column nowrap;
        border-top: 1rem;
        margin-top: 2rem;
    `;

    const drop = (event) => {
        event.preventDefault();
        console.log("Drop: " + event);
        const whatDropped = event.dataTransfer.getData("id");
        const moveThis = document.getElementById(whatDropped);
        const target = event.target;
        if (target.classList.includes("cart-zone")) {
            target.appendChild(moveThis);
        }
    }

    const dragOver = (event) => {
        event.preventDefault();
    }

    return (
        <CartBox>
            <FlexBox id="cart-metal" className="w-100 cart-zone zone-metal" onDrop={drop} onDragOver={dragOver} color='silver'>Smithy</FlexBox>
            <FlexBox id="cart-wood" className="w-100 cart-zone zone-wood" onDrop={drop} onDragOver={dragOver} color='blanchedalmond'>Lumber</FlexBox>
            <FlexBox id="cart-leather" className="w-100 cart-zone zone-leather" onDrop={drop} onDragOver={dragOver} color='sienna'>Leather</FlexBox>
        </CartBox>
    )
}

export {
    Cart
}
