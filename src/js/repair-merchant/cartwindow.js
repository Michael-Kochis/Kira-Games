import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {Cart} from './cart'
import {FlexBox} from '../common/flexbox'
import { MerchantIcon } from './merchant-icon'

function CartWindow() {
    let history = useHistory();

    function replay() {
        history.push({
            pathname: `${history.location.pathname}`,
            search: '?replayStory=true'
        });
    }

    return (
        <div>
            <FlexBox>
                <FlexBox className="w-30" color="gray">
                    <MerchantIcon></MerchantIcon>
                </FlexBox>
                <Cart className="w-30"></Cart>
                <FlexBox className="w-30" color='gray'>Tasks</FlexBox>
            </FlexBox>
            <Button onClick={replay} >Replay Story</Button>
        </div>
    )
}

export {
    CartWindow
}
