import React from 'react'

import { connect } from 'react-redux'

function MerchantIcon(props) {
    const currentMerchant = props.merchant;

    const dragEnd = (event) => {
        const target = event.target;
        target.draggable = false;
        setTimeout(() => {target.draggable = true}, 5000);
    }

    const dragStart = (event) => {
        const target = event.target;

        event.dataTransfer.setData('id', target.id);
    }

    const dragOver = (event) => {
        event.stopPropagation();
    }

    return (
        <div
            id={currentMerchant.name}
            onDragEnd={dragEnd}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable="true"
            className="merchant worker"
        >
            {currentMerchant.name}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(MerchantIcon)