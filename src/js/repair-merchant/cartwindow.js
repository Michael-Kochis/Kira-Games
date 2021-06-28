import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Cart } from './cart'
import { FlexBox } from '../common/flexbox'
import MerchantIcon from './merchant-icon'
import { TaskIcon } from './task-icon'
import { useTask } from '../context/taskContext'

import { addStory, merchantSave } from '../actions/merchantActions'
import { useAuth } from '../context/authContext'
import { connect } from 'react-redux'

function CartWindow(props) {
    let history = useHistory();
    let { isEmpty, tasks } = useTask();
    const { setMode } = props;
    const { currentUser } = useAuth();

    function goMap() {
        setMode("map");
    };

    const passTest = (evt) => {
        evt.preventDefault();
        props.addStory("default-test");
        props.merchantSave(props.merchant, currentUser.uid);
        history.push(`/repair-merchant/${props.merchant.name}`);
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
            {isEmpty() && <Button onClick={passTest}>Pass Test</Button>}
            {isEmpty() && <Button onClick={goMap}>World Map</Button>}
            <Button onClick={replay} >Replay Story</Button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

const mapFunctionsToProps = {
    addStory,
    merchantSave
}

export default connect(mapStateToProps, mapFunctionsToProps)(CartWindow);