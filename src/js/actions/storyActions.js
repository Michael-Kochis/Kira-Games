export const END_STORY = "END_STORY"
export const SET_INDEX = "SET_INDEX"
export const SET_STORY = "SET_STORY"
export const START_STORY = "START_STORY"

const endStory = (value) => {
    return ({type: END_STORY, payload: value})
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

const setStory = (value) => {
    return ({type: SET_STORY, payload: value})
}

const startStory = (value) => {
    return ({type: START_STORY, payload: value})
}

export {
    endStory,
    setIndex,
    setStory,
    startStory
}