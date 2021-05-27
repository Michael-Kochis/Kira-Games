import React from 'react'
import '../icon.css'

function TaskIcon(props) {
    let color = "navy";
    const { index, taskType } = props;

    if (taskType.includes("leather")) {
        color = "sienna";
    } else if (taskType.includes("metal")) {
        color = "silver";
    } else if (taskType.includes("wood")) {
        color = "blanchedalmond";
    }

    let idString = `task-${index}`;
    let className = `task task-${taskType} ${color}`

const dragStart = (event) => {
        const target = event.target;

        event.dataTransfer.setData('id', target.id);
    }

    const dragOver = (event) => {
        event.stopPropagation();
    }

    return (
        <div
            id={idString}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable="true"
            className={className}
            index={index}
        >
            {props.children}
        </div>
    )
}

export {
    TaskIcon
}
