import { database } from '../firebase'

export const ADD_DEBENTURES = "ADD_DEBENTURES";
export const ADD_STORY = "ADD_STORY";
export const MERCHANT_LOAD = "MERCHANT_LOAD";
export const MERCHANT_NAME = "MERCHANT_NAME";
export const MERCHANT_SAVE = "MERCHANT_SAVE";
export const MERCHANT_SET = "MERCHANT_SET";

const addDebentures = (neoDebentures) => {
    return ({type: ADD_DEBENTURES, payload: neoDebentures})
}

const addStory = (name) => {
    return ({type: ADD_STORY, payload: name});
}

const merchantLoad = (name, uid) => {
    return((dispatch) => {
        dispatch(merchantName(name));
        database.persona
        .doc(`${uid}`)
        .collection("Games")
        .doc(`${name}`)
        .get().then( doc => {
            dispatch(merchantSet(doc.data()) );
        }).catch(() => {});    })
}

const merchantName = (name) => {
    return ({type: MERCHANT_NAME, payload: name})
}

const merchantSave = (merchant, uid) => {
    return ((dispatch) => {
        database.persona
            .doc(`${uid}`)
            .collection("Games")
            .doc(`${merchant.name}`)
            .set(merchant)
            .then(() => { 
                dispatch({type: MERCHANT_SAVE});
                dispatch(merchantSet, merchant);
                //window.location.href("/");
            }).catch((error) => alert(error));
    })
}

const merchantSet = (merchant) => {
    return ({type: MERCHANT_SET, payload: merchant});
}

export {
    addDebentures,
    addStory,
    merchantLoad,
    merchantName,
    merchantSave,
    merchantSet
}