import {React, useEffect, useRef, useState} from 'react'
import '../../App.css'
import {database} from '../firebase'

function StoryBoard(props) {
    let [story, setStory] = useState([]);
    let index = 0;
    let name = props.id;
    let merchantName = props.merchant;
    const storyRef = useRef([]);

    async function getStory() {
        try { 
            await database.games.doc(`Repair-Merchant`).collection(`story`)
            .doc(`${name}`).get().then(doc => { 
                if (doc.exists) { 
                    story = doc.data().story;
                    setStory(story.map((item) => {
                        if (item.speaker === "merchant") {
                            item.speaker = merchantName;
                        }
                        return item; 
                    })) 
                }
            }).catch(error => alert(error));
            
        } catch (error) {
            alert(error);
        }
        return story;
    }

    useEffect(() => { 
        if (name !== undefined && name !== null) {
            getStory();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storyRef])

    let currentStory = story[index];
    return (
        <div id="story-board">
            {currentStory && <h3 id="speaker">{currentStory.speaker}</h3>}
            {currentStory && <p className="story-text">{currentStory.quote}</p> }
            {!currentStory && <p>Story not found!</p>}
        </div>
    )
}

export {
    StoryBoard
}
