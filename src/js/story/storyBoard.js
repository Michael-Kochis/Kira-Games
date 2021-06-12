import {React, useEffect, useRef, useState} from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import '../../App.css'
import {database} from '../firebase'
import {useMerchant} from '../context/merchantContext'

import { connect } from 'react-redux'
import { endStory, setIndex, setStory, startStory } from '../actions/storyActions'

function StoryBoard(props) {
    let [storyAward, setStoryAward] = useState();
    let history = useHistory();
    let {addDebentures, addStory, currentMerchant} = useMerchant();
    let name = props.id;
    let merchantName = props.merchant;
    const storyRef = useRef([]);

    function addStoryAward(award) {
        if (currentMerchant.story.includes("RM-Intro")) {
            // do nothing, story already awarded.
        } else {
            if (award.debentures) {
                addDebentures(award.debentures);
            }
        }   
    }

    function backStory() {
        props.setIndex(props.story.index - 1);
    }

    function finishStory() {
        if (currentMerchant) {
            addStoryAward(storyAward);
            addStory("RM-Intro");
        }
        history.push(`/repair-merchant/${merchantName}`);
    }

    async function getStory() {
        try { 
            await database.games.doc(`Repair-Merchant`).collection(`story`)
            .doc(`${name}`).get().then(doc => { 
                if (doc.exists) { 
                   setStoryAward(doc.data().awards);
                    storyAward = doc.data().awards;
                    props.setStory(doc.data().story.map((item) => {
                        if (item.speaker === "merchant") {
                            item.speaker = merchantName;
                        }
                        item.quote = item.quote.replace("$merchant", merchantName);

                        return item; 
                    })) 
                }
            }).catch(error => alert(error));
            
        } catch (error) {
            alert(error);
        }
        return props.story.book;
    }

    function nextStory() {
        props.setIndex(props.story.index + 1);
    }

    useEffect(() => { 
        if (name !== undefined && name !== null) {
            getStory();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storyRef])

    let currentStory = props.story.book[props.story.index];
    let startStory = props.story.isAtStart;
    let endStory = props.story.isAtEnd;

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

function mapStateToProps(state) {
    return {
        ...state
    }
}


export default connect(mapStateToProps, { endStory, setIndex, setStory, startStory})(StoryBoard)