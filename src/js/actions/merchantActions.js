export const MERCHANT_NAME = "MERCHANT_NAME";
export const MERCHANT_SAVE = "MERCHANT_SAVE";

const merchantName = (name) => {
    return ({type: MERCHANT_NAME, payload: name})
}

const merchantSave = () => {
    return ({type: MERCHANT_SAVE})
}

export {
    merchantName,
    merchantSave
}