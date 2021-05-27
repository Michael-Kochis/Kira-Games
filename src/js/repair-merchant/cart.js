import React from 'react'
import '../flexbox.css'
import { FlexBox } from '../common/flexbox'

function Cart() {
    const dragOver = (event) => {
        event.preventDefault();
    }

    return (
        <div id="cart" className="cart">
            <FlexBox id="cart-metal" className="w-100 cart-zone zone-metal" onDragOver={dragOver} color='silver'></FlexBox>
            <FlexBox id="cart-wood" className="w-100 cart-zone zone-wood" onDragOver={dragOver} color='blanchedalmond'></FlexBox>
            <FlexBox id="cart-leather" className="w-100 cart-zone zone-leather" onDragOver={dragOver} color='sienna'></FlexBox>
        </div>
    )
}

export {
    Cart
}
