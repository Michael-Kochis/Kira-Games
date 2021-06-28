import {React, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'

import '../../App.css'
import {ChatApp} from '../chatApp/chatApp'
import {KiraNavBar} from '../KiraNavBar'
import RMCharacterSheet from './rm-character'
import {RMMainGame} from './gameWindow'

import { useAuth } from '../context/authContext'
import { connect } from 'react-redux'
import { merchantLoad } from '../actions/merchantActions'

function RMGame(props) {
    let merchantRef = useRef();
    const merchant = props.merchant;
    const {name} = useParams();
    const { currentUser } = useAuth();

    useEffect(() => {
        props.merchantLoad(name, currentUser.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [merchantRef]); 
    
    return (
        <div >
            <KiraNavBar className="w-100" />
            <h3 className="text-white top">Name: {name} </h3>
            <div className="d-flex left-right">
                <ChatApp id={name} className="half-screen"></ChatApp>
                <RMCharacterSheet id={name} className="half-screen"></RMCharacterSheet>
            </div>
            {merchant && <RMMainGame merchant={merchant} /> }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {merchantLoad})(RMGame);
