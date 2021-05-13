import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../common/flexbox'

function Cart() {
    const CartBox = styled.div `
        display: flex;
        flex-flow: column nowrap;
    `

    return (
        <CartBox>
            <FlexBox className="w-100" color='silver'>Smithy</FlexBox>
            <FlexBox className="w-100" color='blanchedalmond'>Lumber</FlexBox>
            <FlexBox className="w-100" color='sienna'>Leather</FlexBox>
        </CartBox>
    )
}

export {
    Cart
}
