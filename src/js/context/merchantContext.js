import React, {useContext, useState} from 'react'
import '../../App.css'
import {useAuth} from './authContext'
import {database} from '../firebase'

const MerchantContext = React.createContext();

function useMerchant() {
    return useContext(MerchantContext);
}

function MerchantProvider({children}) {
    let [currentMerchant, setCurrentMerchant] = useState();
    let {currentUser} = useAuth();
    let loadingMerchant = false;

    async function loadMerchant(merchantName) {
        try {
            loadingMerchant = true;
            await database.persona
            .doc(`${currentUser.uid}`)
            .collection("Games")
            .doc(`${merchantName}`)
            .get().then( doc => {
                setCurrentMerchant(doc.data() );
            }).catch(() => {});
        } catch (error) {
            
        } finally {
            loadingMerchant = false;
        }
    }

    const value = {
        currentMerchant,
        loadMerchant
    }

    return (
        <MerchantContext.Provider value={value}>
          {!loadingMerchant && children}
        </MerchantContext.Provider>
      )
  
}

export {
    MerchantProvider,
    useMerchant
}