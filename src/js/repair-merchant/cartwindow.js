import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Cart } from './cart'
import { FlexBox } from '../common/flexbox'
import { MerchantIcon } from './merchant-icon'
import { TaskIcon } from './task-icon'
import { useTask } from '../context/taskContext'

function CartWindow(props) {
    let history = useHistory();
    let { isEmpty, refresh, tasks } = useTask();
    const { setMode } = props;

    function goMap() {
        setMode("map");
    }

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
                <FlexBox id="zone-task" className="zone-task w-30" color='gray'>
                    {isEmpty()?"No tasks remain" : tasks.map((item) => {
                        return <TaskIcon key={item.nombre} 
                            index={item.nombre} taskType={item.type}>
                            {item.name}
                        </TaskIcon>
                    })}
                </FlexBox>
            </FlexBox>
            <div id="cart-message"></div>
            {isEmpty() && <Button onClick={refresh}>Next Task Set</Button>}
            {isEmpty() && <Button onClick={goMap}>World Map</Button>}
            <Button onClick={replay} >Replay Story</Button>
        </div>
    )
}

export {
    CartWindow
}
