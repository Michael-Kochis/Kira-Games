import React from 'react'
import '../flexbox.css'
import { useTask } from '../context/taskContext'

function FlexBox(props) {
    const { removeTask } = useTask();

    const checkBox = (target) => {
        let workChild = target.querySelector(".worker");
        let taskChild = target.querySelector(".task");
        let taskArea = document.getElementById("zone-task");
        if ((workChild) && (taskChild)) {
            let message = document.getElementById("cart-message")
            message.textContent = (workChild.id + " started work on " + taskChild.textContent);
            setTimeout(() => {
                message.textContent = (workChild.id + " finished work on " + taskChild.textContent);
                taskArea.appendChild(taskChild);
                removeTask(taskChild.id);
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

    const neoClass = "flexbox " + props.color + " " + props.className;

    return (
        <div id={props.id} className={neoClass} onDrop={drop} 
            onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export {
    FlexBox
}
