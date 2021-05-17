import React from 'react'
import styled from 'styled-components'

function TaskIcon(props) {
    let color = "navy";

    if (props.type.includes("leather")) {
        color = "sienna";
    } else if (props.type.includes("metal")) {
        color = "silver";
    } else if (props.type.includes("wood")) {
        color = "blanchedalmond";
    }

    const Outline = styled.div `
        border: 2px solid ${color};
        color: black;
        background-color: transparent;
        width: 50%;
    `

const dragStart = (event) => {
        const target = event.target;

        event.dataTransfer.setData('id', target.id);
    }

    const dragOver = (event) => {
        event.stopPropagation();
    }

    return (
        <Outline
            id={props.id}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable="true"
            className={props.className}
        >
            {props.children}
        </Outline>
    )
}

export {
    TaskIcon
}
