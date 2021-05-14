import {React } from 'react'
import '../../App.css'
import { CoinPurse } from '../common/money/coinpurse'
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
            {currentMerchant && currentMerchant.coins && <CoinPurse name="Coins" contents={currentMerchant.coins}></CoinPurse>}
            {currentMerchant && currentMerchant.debentures && <CoinPurse name="Debentures" contents={currentMerchant.debentures}></CoinPurse>}
        </span>
    )
}

export {
    RMCharacterSheet
}
