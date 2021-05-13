import React from 'react'
import {Cart} from './cart'
import {FlexBox} from '../common/flexbox'

function CartWindow({children}) {
    return (
        <div>
            {children}
            <FlexBox>
                <FlexBox className="w-30" color="gray">1</FlexBox>
                <Cart className="w-30"></Cart>
                <FlexBox className="w-30" color='gray'>5</FlexBox>
            </FlexBox>
        </div>
    )
}

export {
    CartWindow
}
