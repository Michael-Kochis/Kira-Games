import  {React, useEffect, useRef, useState } from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useMerchant} from './merchantContext'
import {database} from '../firebase'
import {useAuth} from './authContext'

function UseMerchant() {
  const [children, setChildren] = useState([]);
  const { currentUser } = useAuth();
  let {loadMerchant} = useMerchant();
  const childRef = useRef([]);
  const history = useHistory();

  async function doNothing(object, e) {
    e.preventDefault();
    try {
      loadMerchant(object);
      history.push(`/repair-merchant/${object}`);
    } catch(error) {
      alert(error);
    }
  }

  async function getChildren() {
    try {
        await database.persona
        .doc(`${currentUser.uid}`)
        .collection("Games")
        .get().then( snapShot => { 
            setChildren(snapShot.docs.map(doc => doc.data()))
        }).catch(error => alert(error));
        
       return children;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      getChildren();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childRef]); 
  
  return (
    <div>
      {children && children.length > 0 && (
        <div className="d-flex flex-wrap">
          {children.map((child) => (
            <Button id={child.name} key={child.name} className="btn btn-primary" onClick={(e) => doNothing(child.name, e)}>
              {child.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export {
    UseMerchant
}