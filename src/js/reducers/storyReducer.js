import { END_STORY, SET_AWARDS, SET_INDEX, SET_NAME, SET_STORY, START_STORY } from '../actions/storyActions'

const initialState = {
    awards: {},
    index: 0,
    isAtStart: true,
    isAtEnd: false,
    name: "",
    book: []
}

const storyReducer = (state = initialState, action) => {
    switch(action.type) {
        case (END_STORY):
            return ({
                ...state,
                isAtEnd: action.payload
            })
        case (SET_AWARDS):
            return ({
                ...state,
                awards: action.payload
            })
        case (SET_INDEX):
            return ({
                ...state,
                index: action.payload
            })
        case (SET_NAME):
            return ({
                ...state,
                name: action.payload
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