import {React, useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router-dom'
import '../../App.css'
import {ChatApp} from '../chatApp/chatApp'
import {database} from '../firebase'
import {RMCharacterSheet} from './rm-character'
import {useAuth} from '../context/authContext'


function RMGame() {
    let {currentUser} = useAuth();
    let merchantRef = useRef();
    let {name} = useParams()

    let [merchant, setMerchant] = useState();

    async function getMerchant() {
        await database.persona
        .doc(`${currentUser.uid}`)
        .collection("Games")
        .doc(`${name}`)
        .get().then( doc => {
            setMerchant(doc.data() );
        }).catch(error => alert(error));
    }
    
    useEffect(() => {
        getMerchant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [merchantRef]); 
    
    return (
        <div >
            <h3 className="text-white top">Name: {name} </h3>
            <div className="d-flex left-right">
                <ChatApp id={name} className="half-screen"></ChatApp>
                <RMCharacterSheet id={name} className="half-screen"></RMCharacterSheet>
            </div>
            {merchant && <h3>{merchant.name}</h3> }
        </div>
    )
}

export {
    RMGame
}
