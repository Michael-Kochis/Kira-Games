import {React, useEffect, useRef} from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import '../../App.css'

import { useAuth } from '../context/authContext'

import { connect } from 'react-redux'
import { addDebentures, addStory, merchantSave } from '../actions/merchantActions'
import { endStory, loadStory, nextIndex, prevIndex, setStory, startStory } from '../actions/storyActions'

function StoryBoard(props) {
    let history = useHistory();
    const { currentUser } = useAuth();
    let name = props.id;
    let merchantName = props.merchant.name;
    const storyRef = useRef([]);

    function addStoryAward() {
        if (props.merchant.story.includes(props.story.name)) {
            // do nothing, story already awarded.
        } else {
            if (props.story.awards.debentures) {
                props.addDebentures(props.story.awards.debentures);
            }
        }   
    }

    function backStory() {
        props.prevIndex();
    }

    function finishStory() {
        if (props.merchant) {
            addStoryAward();
            props.addStory("RM-Intro");
            props.merchantSave(props.merchant, currentUser.uid);
        }
        history.push(`/repair-merchant/${merchantName}`);
    }

    async function getStory(name) {
        props.loadStory(name)
    }

    function nextStory() {
        props.nextIndex();
    }

    useEffect(() => { 
        if (name !== undefined && name !== null) {
            getStory("RM-Intro");
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

const mapFunctionsToProps = {
    addDebentures,
    addStory,
    endStory, 
    loadStory,
    merchantSave,
    nextIndex, 
    prevIndex, 
    setStory, 
    startStory
}


export default connect(mapStateToProps, mapFunctionsToProps)(StoryBoard)