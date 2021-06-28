import { database } from '../firebase'

export const END_STORY = "END_STORY";
export const LOAD_STORY = "LOAD_STORY";
export const NEXT_INDEX = "NEXT_INDEX";
export const PREV_INDEX = "PREV_INDEX";
export const SET_AWARDS = "SET_AWARDS";
export const SET_INDEX = "SET_INDEX";
export const SET_NAME = "SET_NAME";
export const SET_STORY = "SET_STORY";
export const START_STORY = "START_STORY";

const endStory = (value) => {
    return ({type: END_STORY, payload: value})
}

const loadStory = (storyName) => {
    return ((dispatch, getState) => {
        const { name } = getState().merchant;
        database.rmstory
        .doc(`${storyName}`).get().then(doc => { 
            if (doc.exists) { 
                console.log("something found " + doc.data());
                dispatch(setAwards(doc.data().awards) );
                dispatch(setName(doc.data().name));
                dispatch(setStory(doc.data().story.map((item) => {
                    if (item.speaker === "merchant") {
                        item.speaker = name;
                    }
                    item.quote = item.quote.replace("$merchant", name);

                    return item; 
                }))  )
                
            }
        }).catch(error => alert(error));    })
}

const nextIndex = () => {
    return ((dispatch, getState) => {
        const { index, book } = getState().story;
        let value = index + 1;
        const maxStory = (book)?(book.length -1):0;

        if (value > maxStory) {
            value = maxStory;
        }
        dispatch(startStory(false) );
        dispatch({type: SET_INDEX, payload: value});
        
        if (value === maxStory) {
            dispatch(endStory(true) );
        }
    })
}

const prevIndex = () => {
    return ((dispatch, getState) => {
        const { index } = getState().story;
        let value = index - 1;

        if (value < 0) {
            value = 0;
        }
        dispatch(endStory(false) );
        dispatch({type: SET_INDEX, payload: value});
        if (value === 0 ) {
            dispatch(startStory(true) );
        }

    })
}

const setAwards = (value) => {
    return ({type: SET_AWARDS, payload: value})
}

const setIndex = (value) => {
    return ((dispatch, getState) => {
        const {book} = getState().story;
        const maxStory = (book)?(book.length -1):0;
        
        if (value < 0) {
            value = 0;
        } else if (value > maxStory) {
            value = maxStory;
        }

        dispatch({type: SET_INDEX, payload: value});
        if (value === 0) {
            dispatch(startStory(true));
            dispatch(endStory(false));
        } else if (value === maxStory) {
            dispatch(startStory(false));
            dispatch(endStory(true));
        } else {
            dispatch(startStory(false));
            dispatch(endStory(false));
        }
    })
}

const setName = (value) => {
    return ({type: SET_NAME, payload: value})
}

const setStory = (value) => {
    return ({type: SET_STORY, payload: value})
}

const startStory = (value) => {
    return ({type: START_STORY, payload: value})
}

export {
    endStory,
    loadStory,
    nextIndex,
    prevIndex,
    setIndex,
    setStory,
    startStory
}