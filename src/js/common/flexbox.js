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

    const checkBox = (target) => {
        let workChild = target.querySelector(".worker");
        let taskChild = target.querySelector(".task");
        if ((workChild) && (taskChild)) {
            let message = document.getElementById("cart-message")
            message.textContent = (workChild.id + " started work on " + taskChild.textContent);
            setTimeout(() => {
                message.textContent = (workChild.id + " finished work on " + taskChild.textContent);
                target.removeChild(taskChild);
            }, 5000);
            setTimeout(() => {message.textContent = ""}, 10000);
        }
    }

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
        checkBox(target);
    } else if (target.classList.contains("zone-worker")) {
        if (moveThis.classList.contains("worker")) {
            target.appendChild(moveThis);
        }
    } else if (target.classList.contains("zone-task")) {
        if (moveThis.classList.contains("task")) {
            target.appendChild(moveThis);
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
