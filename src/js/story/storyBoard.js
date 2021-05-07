import {React, useEffect, useRef, useState} from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import '../../App.css'
import {database} from '../firebase'

function StoryBoard(props) {
    let [story, setStory] = useState([]);
    let [endStory, setEndStory] = useState(false);
    let [startStory, setStartStory] = useState(true);
    let history = useHistory();
    let [index, setIndex] = useState(0);
    let name = props.id;
    let merchantName = props.merchant;
    const storyRef = useRef([]);

    function backStory() {
        setEndStory(false);
        setIndex(--index);
        if (index === 0) {
            setStartStory(true);
        }
    }

    function finishStory() {
        history.push("/");
    }

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

    function nextStory() {
        setIndex(++index);
        setStartStory(false);
        if (index+1 >= story.length) {
            setEndStory(true);
        }
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
            {!startStory && <Button className="btn back" onClick={backStory}>Back</Button>}
            {!endStory && <Button className="btn next" onClick={nextStory}>Next</Button>}
            {endStory && <Button className="btn end" onClick={finishStory}>Finish</Button>}
        </div>
    )
}

export {
    StoryBoard
}
