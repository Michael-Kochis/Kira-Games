import React, { useState } from 'react'
import { CartWindow } from '../repair-merchant/cartwindow'
import { MapCanvas } from '../common/map/map-canvas'
import {StoryBoard} from '../story/storyBoard'
import { useMerchant } from '../context/merchantContext'

function RMMainGame(props) {
    let urlParams = new URLSearchParams(window.location.search);
    let replayStory = urlParams.get('replayStory');
    let merchant = props.merchant;
    let {currentMerchant} = useMerchant();
    let [mode, setMode] = useState("story");

    if (mode === "story" ) { 
        if (!(replayStory && (replayStory.includes("true")) ) &&
            (currentMerchant.story && currentMerchant.story.includes("RM-Intro")) )  {
            setMode("game");
        } 
    }

    if (mode === 'story') {
        return (
            <div>
                {merchant && mode === "story" && <StoryBoard id="RM-Intro" merchant={merchant.name} />}
                {!merchant && <p>No merchant found!</p>}
            </div>
        )    
    } else if (mode === "map") { 
        return (
            <MapCanvas />
        )
    } else { 
        return (
            <div>
                {merchant && (mode === "game") && <CartWindow setMode={setMode}>This is the CartWindow</CartWindow>}
            </div>
                
        )
    }
}

export {
    RMMainGame
}