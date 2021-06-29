import  {React, useEffect, useRef, useState } from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {database} from '../firebase'
import {useAuth} from './authContext'

import { connect } from 'react-redux'
import { merchantLoad } from '../actions/merchantActions'

function UseMerchant(props) {
  const [children, setChildren] = useState([]);
  const { currentUser } = useAuth();
  const childRef = useRef([]);
  const history = useHistory();

  async function doNothing(merchantName, e) {
    e.preventDefault();
    try {
      props.merchantLoad(merchantName, currentUser.uid);
      history.push(`/repair-merchant/`);
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

function mapStateToProps(state) {
  return {
      ...state
  }
}

const mapFunctionsToProps = {
  merchantLoad
}

export default connect(mapStateToProps, mapFunctionsToProps)(UseMerchant)