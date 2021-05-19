import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {Cart} from './cart'
import {FlexBox} from '../common/flexbox'
import { MerchantIcon } from './merchant-icon'
import { TaskIcon } from './task-icon'

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
                <FlexBox className="w-30" color='gray'>
                    <TaskIcon id="task0" type="zone-leather" className="task task-leather">Bootlace</TaskIcon>
                    <TaskIcon id="task1" type="zone-metal" className="task task-metal">Straighten Nail</TaskIcon>
                    <TaskIcon id="task2" type="zone-wood" className="task task-wood">Dowel Rod</TaskIcon>
                </FlexBox>
            </FlexBox>
            <div id="cart-message"></div>
            <Button onClick={replay} >Replay Story</Button>
        </div>
    )
}

export {
    CartWindow
}
