import { ADD_DEBENTURES, ADD_STORY, MERCHANT_NAME, MERCHANT_SAVE, MERCHANT_SET } from '../actions/merchantActions'

const initialState = {
    name: "",
    game: "Repair Merchant",
    XP: 0,
    honor: 100,
    coins: {gold: 0, silver: 0, copper: 0, tin: 0},
    debentures: {gold: 0, silver: 0, copper: 0, tin: 0},
    skills: {leather:3, lumber: 3, smith: 3},
    story: {}
}

const merchantReducer = (state = initialState, action) => {
    switch(action.type) {
        case (ADD_DEBENTURES): 
            let neoDebentures = action.payload;
            neoDebentures.gold += state.debentures.gold;
            neoDebentures.silver += state.debentures.silver;
            neoDebentures.copper += state.debentures.copper;
            neoDebentures.tin += state.debentures.tin;
            
            return ({
                ...state,
                debentures: neoDebentures
            })
        case (ADD_STORY): 
            if (state.story.includes(action.payload)) {
                return state;
            } else { 
                return ({
                    ...state,
                    story: [
                        ...state.story,
                        action.payload
                    ]
                })
            }
        case (MERCHANT_NAME):
            return ({
                ...state,
                name: action.payload
            })
        case (MERCHANT_SAVE):
            return state;
        case (MERCHANT_SET):
            return ({
                ...action.payload
            })
        default:
            return state;
    }
}

export {
    merchantReducer
}