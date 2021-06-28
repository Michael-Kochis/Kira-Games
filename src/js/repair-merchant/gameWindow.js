import React, { useState } from 'react';
import CartWindow from '../repair-merchant/cartwindow';
import { MapCanvas } from '../common/map/map-canvas';
import StoryBoard from '../story/storyBoard';

function RMMainGame(props) {
    let urlParams = new URLSearchParams(window.location.search);
    let replayStory = urlParams.get('replayStory');
    let merchant = props.merchant;
    let [mode, setMode] = useState("story");

    if (mode === "story" ) { 
        if (!(replayStory && (replayStory.includes("true")) ) &&
            (merchant.story && merchant.story.includes("RM-Intro")
            && merchant.story.includes("Meet-Schultz")) )  {
            setMode("game");
        } 
    }

    if (mode === 'story') {
        if (merchant && merchant.story.includes("RM-Intro")) {
            if (merchant.story.includes("default-test")) { 
                return (
                    <div>
                        {merchant && <StoryBoard id="Meet-Schultz" merchant={merchant.name} />}
                        {!merchant && <p>No merchant found!</p>}
                    </div>
                )
            } 
            mode = "game";
            return(
                <div>
                    {merchant && <CartWindow setMode={setMode}>This is the CartWindow</CartWindow>}
                </div>
            )
        } else {
            return (
                <div>
                    {merchant && mode === "story" && <StoryBoard id="RM-Intro" merchant={merchant.name} />}
                    {!merchant && <p>No merchant found!</p>}
                </div>
            )    
        }
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