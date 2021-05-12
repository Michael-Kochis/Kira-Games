import {React} from 'react'
import {StoryBoard} from '../story/storyBoard'
import { useMerchant } from '../context/merchantContext'

function RMMainGame(props) {
    let merchant = props.merchant;
    let {currentMerchant} = useMerchant();
    let mode = "";

    if (currentMerchant.story && currentMerchant.story.includes("RM-Intro")) {
        mode = "game";
    } else {
        mode = "story";
    }
    console.log(mode);

    if (mode === 'story') {
        return (
            <div>
                {merchant && mode === "story" && <StoryBoard id="RM-Intro" merchant={merchant.name} />}
                {!merchant && <p>No merchant found!</p>}
            </div>
        )    
    } else { 
        return (
            <div>
                {merchant && (mode === "game") && <p>Game window goes here.</p>}
            </div>
                
        )
    }
}

export {
    RMMainGame
}