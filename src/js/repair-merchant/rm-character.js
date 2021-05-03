import {React, useEffect, useRef, useState} from 'react'
import '../../App.css'
import {database} from '../firebase'
import {useAuth} from '../context/authContext'

function RMCharacterSheet(props) {
    let [merchant, setMerchant] = useState();
    let merchRef = useRef('');
    let name = props.id;
    let {currentUser} = useAuth();

    async function getMerchant() {
        try {
            await database.persona
            .doc(`${currentUser.uid}`)
            .collection("Games")
            .doc(`${name}`)
            .get().then( item => { 
                setMerchant(item.data())
            }).catch(error => alert(error));
            
            return merchant;
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
          getMerchant();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [merchRef]); 

    return (
        <span className="character-sheet w-100">
            {merchant && `${merchant.name}`}
            {merchant && <p>XP: {merchant.XP} </p>}
            {merchant && <p>Skills: 
                Leather: {merchant.skills.leather}  Lumber: {merchant.skills.lumber}  Smith: {merchant.skills.smith}</p>}
            <br />
            {merchant && <p className="left">  Gold: {merchant.coins.gold}  Silver: {merchant.coins.silver}  Copper: {merchant.coins.copper}  Tin: {merchant.coins.tin}</p>}
        </span>
    )
}

export {
    RMCharacterSheet
}
