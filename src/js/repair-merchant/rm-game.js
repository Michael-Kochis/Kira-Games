import { React } from 'react'

import '../../App.css'
import {ChatApp} from '../chatApp/chatApp'
import {KiraNavBar} from '../KiraNavBar'
import RMCharacterSheet from './rm-character'
import {RMMainGame} from './gameWindow'

import { connect } from 'react-redux'
import { merchantLoad } from '../actions/merchantActions'

function RMGame(props) {
    const merchant = props.merchant;
    const {name} = merchant;

    return (
        <div >
            <KiraNavBar className="w-100" />
            <h3 className="text-white top">Name: {name} </h3>
            <div className="d-flex left-right">
                <ChatApp id={name} className="half-screen"></ChatApp> 
                <RMCharacterSheet id={name} className="half-screen"></RMCharacterSheet>
            </div>
            {name && <RMMainGame merchant={merchant} /> }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {merchantLoad})(RMGame);
