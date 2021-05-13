import React from 'react'

function CoinPurse(props) {
    let purseName = props.name;
    let contents = props.contents;
    let gold = contents.gold;
    let silver = contents.silver;
    let copper = contents.copper;
    let tin = contents.tin

    return (
        <p className="left" >{purseName}: Gold: {gold}, Silver: {silver}, Copper: {copper}, Tin: {tin}</p>
    )
}

export {
    CoinPurse
}
