import React from 'react'
import {Cart} from './cart'
import {FlexBox} from '../common/flexbox'
import { MerchantIcon } from './merchant-icon'

function CartWindow() {
    return (
        <div>
            <FlexBox>
                <FlexBox className="w-30" color="gray">
                    <MerchantIcon></MerchantIcon>
                </FlexBox>
                <Cart className="w-30"></Cart>
                <FlexBox className="w-30" color='gray'>Tasks</FlexBox>
            </FlexBox>
        </div>
    )
}

export {
    CartWindow
}
