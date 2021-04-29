import React from 'react'

function ChatApp(props) {
    let name = props.id;
    return (
        <div>
           {name} 
        </div>
    )
}

export {
    ChatApp
}
