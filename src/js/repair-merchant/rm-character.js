import {React } from 'react'
import '../../App.css'
import  { useMerchant }  from '../context/merchantContext'

function RMCharacterSheet(props) {
    let {currentMerchant} = useMerchant();
    let {loadMerchant} = useMerchant();
    
    if (currentMerchant === undefined) {
        loadMerchant(props.id);
    }
    
    return (
        <span className="character-sheet w-100">
            {currentMerchant && `${currentMerchant.name}`}
            {currentMerchant && <p>XP: {currentMerchant.XP} </p>}
            {currentMerchant && <p>Skills: 
                Leather: {currentMerchant.skills.leather}  Lumber: {currentMerchant.skills.lumber}  Smith: {currentMerchant.skills.smith}</p>}
            <br />
            {currentMerchant && <p className="left">Coins:  Gold: {currentMerchant.coins.gold}  Silver: {currentMerchant.coins.silver}  Copper: {currentMerchant.coins.copper}  Tin: {currentMerchant.coins.tin}</p>}
            {currentMerchant && currentMerchant.debentures && <p className="left">Debentures:  Gold: {currentMerchant.debentures.gold}  Silver: {currentMerchant.debentures.silver}  Copper: {currentMerchant.debentures.copper}  Tin: {currentMerchant.debentures.tin}</p>}
        </span>
    )
}

export {
    RMCharacterSheet
}
