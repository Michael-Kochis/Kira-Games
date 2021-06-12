import { END_STORY, SET_INDEX, SET_STORY, START_STORY } from '../actions/storyActions'

const initialState = {
    index: 0,
    isAtStart: true,
    isAtEnd: false,
    book: []
}

const storyReducer = (state = initialState, action) => {
    switch(action.type) {
        case (END_STORY):
            return ({
                ...state,
                isAtEnd: action.payload
            })
        case (SET_INDEX):
            return ({
                ...state,
                index: action.payload
            })
        case (SET_STORY): 
            return ({
                ...state,
                book: action.payload
            })
        case (START_STORY):
            return ({
                ...state,
                isAtStart: action.payload
            })
        default:
            return state
    }
}

export {
    storyReducer
}