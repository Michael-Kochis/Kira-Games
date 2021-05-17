import React from 'react'
import styled from 'styled-components'

function FlexBox(props) {
    const BoxArea = styled.div`
        border-radius: 1rem;
        background-color: ${props.color};
        color: black;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        align-content: center;
        justify-content: center;
        text-align: center;
        text-justify: center;
        min-height: 5rem;
        border-top: 0.3rem;
    `

const drop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const whatDropped = event.dataTransfer.getData("id");
    const moveThis = document.getElementById(whatDropped);
    const target = event.target;
    if (target.classList.contains("cart-zone")) {
        if(moveThis.classList.contains("worker")) { 
            target.appendChild(moveThis);
        } else {
            let dropList = moveThis.classList;
            let targetList = target.classList;
            if ((dropList.contains("task-leather") && targetList.contains("zone-leather"))
                || (dropList.contains("task-metal") && targetList.contains("zone-metal"))
                || (dropList.contains("task-wood") && targetList.contains("zone-wood"))  ){
                target.appendChild(moveThis);
            }
        }
    }
}

const dragOver = (event) => {
        event.preventDefault();

    }

    return (
        <BoxArea className={props.className} onDrop={drop} onDragOver={dragOver}>
            {props.children}
        </BoxArea>
    )
}

export {
    FlexBox
}
