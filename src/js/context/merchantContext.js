import React, {useContext, useState} from 'react'
import '../../App.css'
import { useAuth } from './authContext'
import { database } from '../firebase'

const MerchantContext = React.createContext();

function useMerchant() {
    return useContext(MerchantContext);
}

function MerchantProvider({children}) {
    let [currentMerchant, setCurrentMerchant] = useState({});
    let {currentUser} = useAuth();
    let loadingMerchant = false;

    function addDebentures(input) {
        if (currentMerchant) {
            if (!currentMerchant.debentures) {
                currentMerchant.debentures = input;
            } else {
                console.log("current debentures detected");
            }
        } else {
            alert("No merchant error.")
        }
        saveMerchant();
    }

    function addStory(story) {
        if (currentMerchant) {
            if (!currentMerchant.story) {
                currentMerchant.story = [story];
            } else {
                if (!currentMerchant.story.includes(story)) { 
                    currentMerchant.story = [...currentMerchant.story, story]
                }
            }
            saveMerchant();
        } else {
            alert("No Merchant error, cannot add story " + story);
        }
    }

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

    async function saveMerchant(merchant) {
        await database.persona
            .doc(`${currentUser.uid}`)
            .collection("Games")
            .doc(`${merchant.name}`)
            .set(merchant)
            .then(
                console.log("Successful save detected.")
            ).catch((error) => alert(error))
    }

    const value = {
        currentMerchant,
        setCurrentMerchant,
        addDebentures,
        addStory,
        loadMerchant,
        saveMerchant
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