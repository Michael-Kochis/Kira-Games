import { React } from 'react'
import { connect } from 'react-redux'
import '../../App.css'

import { CoinPurse } from '../common/money/coinpurse'
import { useAuth } from '../context/authContext'

import { merchantLoad } from '../actions/merchantActions'

function RMCharacterSheet(props) {
    let currentMerchant = props.merchant;
    let { currentUser } = useAuth();
    
    if (currentMerchant === undefined || currentMerchant.name === "") {
        props.merchantLoad(props.id, currentUser.uid);
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

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { merchantLoad })(RMCharacterSheet)
