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

    const dragOver = (event) => {
        event.preventDefault();
    }

    return (
        <CartBox>
            <FlexBox id="cart-metal" className="w-100 cart-zone zone-metal" onDragOver={dragOver} color='silver'></FlexBox>
            <FlexBox id="cart-wood" className="w-100 cart-zone zone-wood" onDragOver={dragOver} color='blanchedalmond'></FlexBox>
            <FlexBox id="cart-leather" className="w-100 cart-zone zone-leather" onDragOver={dragOver} color='sienna'></FlexBox>
        </CartBox>
    )
}

export {
    Cart
}
