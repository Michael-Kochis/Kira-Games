import { MERCHANT_NAME, MERCHANT_SAVE, MERCHANT_SET } from '../actions/merchantActions'

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
        case (MERCHANT_NAME):
            return ({
                ...state,
                name: action.payload
            })
        case (MERCHANT_SAVE):
            // console.log("Save detected.");
            // console.log(state);
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