import React, { useState } from 'react';
import CartWindow from '../repair-merchant/cartwindow';
import { MapCanvas } from '../common/map/map-canvas';
import StoryBoard from '../story/storyBoard';

function RMMainGame(props) {
    let merchant = props.merchant;
    let [mode, setMode] = useState("story");

    if (mode === 'story') {
        if (merchant.story.includes("RM-Intro")) {
            if (merchant.story.includes("default-test")) { 
                return (
                    <div>
                        {merchant && <StoryBoard id="Meet-Schultz" merchant={merchant.name} />}
                        {!merchant && <p>No merchant found!</p>}
                    </div>
                )
            } else { 
                return(
                    <div>
                        {merchant && <CartWindow setMode={setMode}>This is the CartWindow</CartWindow>}
                    </div>
                )
            }
        } else {
            return (
                <div>
                    {merchant && <StoryBoard id="RM-Intro" merchant={merchant.name} />}
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