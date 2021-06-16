import React, { useState } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faToolbox} from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'

function MerchantIcon(props) {
    const currentMerchant = props.merchant;
    const [hover, setHover] = useState(false);

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

    const onHover = () => {
        setHover(true);
      };
    
      const onLeave = () => {
        setHover(false);
      };
      
      return (
        <div
            id={currentMerchant.name}
            onDragEnd={dragEnd}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            draggable="true"
            className="merchant worker"
        >
            {hover?currentMerchant.name:<FontAwesomeIcon icon={faToolbox} />}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {})(MerchantIcon)