import { database } from '../firebase'

export const MERCHANT_LOAD = "MERCHANT_LOAD";
export const MERCHANT_NAME = "MERCHANT_NAME";
export const MERCHANT_SAVE = "MERCHANT_SAVE";
export const MERCHANT_SET = "MERCHANT_SET";

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
                window.location.href("/");
            }).catch((error) => alert(error));
    })
}

const merchantSet = (merchant) => {
    return ({type: MERCHANT_SET, payload: merchant});
}

export {
    merchantLoad,
    merchantName,
    merchantSave,
    merchantSet
}