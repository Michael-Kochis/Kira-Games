import {React} from 'react'
import '../../App.css'
import {useAuth} from '../context/authContext'

function ChatMessage(props) {
    const {currentUser} = useAuth();
    const { message } = props.message;
    const name = props.name;
    let owner = "";

    if (typeof props != undefined) {
        owner = props.owner;
    } else {
        owner = currentUser.uid;
    }
  
    const messageClass = owner === currentUser.uid ? 'sent' : 'received';

    return (<>
      <div className={`message ${messageClass}`}>
        <p>{name}: {message}</p>
      </div>
    </>)
  }

  export {
      ChatMessage
  }
