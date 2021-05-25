import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {Cart} from './cart'
import {FlexBox} from '../common/flexbox'
import { MerchantIcon } from './merchant-icon'
import { TaskIcon } from './task-icon'

function CartWindow() {
    let history = useHistory();
    let taskList = [
        {
          name: "Bootstrap",
          type: "leather",
          index: 0
        },{
          name: "Straighten Nail",
          type: "metal",
          index: 1
        },{
          name: "Dowel Rod",
          type: "wood",
          index: 2
        }
    ]

    function replay() {
        history.push({
            pathname: `${history.location.pathname}`,
            search: '?replayStory=true'
        });
    }

    return (
        <div>
            <FlexBox>
                <FlexBox className="zone-worker w-30" color="gray">
                    <MerchantIcon></MerchantIcon>
                </FlexBox>
                <Cart className="w-30"></Cart>
                <FlexBox className="zone-task w-30" color='gray'>
                    {taskList.map((item) => {
                        return <TaskIcon key={item.index} 
                            index={item.index} taskType={item.type}>
                            {item.name}
                        </TaskIcon>
                    })}
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
