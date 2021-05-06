import {React} from 'react'
import {StoryBoard} from '../story/storyBoard'

function RMMainGame(props) {
    let merchant = props.merchant;
    let mode = "";

    if (merchant.story && merchant.story.includes("RM-Intro")) {
        mode = "game";
    } else {
        mode = "story";
    }

    if (mode === 'story') {
        return (
            <div>
                {merchant && <StoryBoard id="RM-Intro" merchant={merchant.name} />}
                {!merchant && <p>No merchant found!</p>}
            </div>
        )    
    } else { 
        return (
            <h3>{merchant.name}</h3>
        )
    }
}

export {
    RMMainGame
}