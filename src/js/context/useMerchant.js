import  {React, useEffect, useRef, useState } from 'react'
import {Button} from 'react-bootstrap'
import {database} from '../firebase'
import {useAuth} from './authContext'

function UseMerchant() {
  const [children, setChildren] = useState([]);
  const { currentUser } = useAuth();
  const childRef = useRef([]);

  function doNothing(object, e) {
    e.preventDefault();
    console.log(object);
  }

  async function getChildren() {
    try {
        await database.persona
        .doc(`${currentUser.uid}`)
        .collection("Games")
        .get().then( snapShot => { 
            setChildren(snapShot.docs.map(doc => doc.data()))
        }).catch(error => alert(error));
        
        console.log(children);
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
            <Button id={child.name} onClick={(e) => doNothing(child.name, e)}>
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