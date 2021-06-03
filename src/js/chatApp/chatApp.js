import {React, useRef, useState} from 'react'
import '../../App.css'
import {ChatMessage} from './chatMessage'
import {database } from '../firebase'
import {useAuth} from '../context/authContext'
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatApp(props) {
    const {currentUser} = useAuth();
    const dummy = useRef();
    const name = props.id;
    const messagesRef = database.messages;
    const query = messagesRef.orderBy('timeStamp', 'desc').limit(25);
  
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
        await messagesRef.add({
            message: formValue,
            timeStamp: database.getTime(),
            owner: currentUser.uid,
            name: name
        }).catch((error) => alert(error))
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (
    <span className="chat-box half-screen">
      <main>
  
        <div className="chat-box-message">
            {messages && messages.map(msg => <ChatMessage key={msg.id} owner={msg.owner} message={msg} name={msg.name}/>)}
        </div>
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Remember, kids use this also." />
  
        <button type="submit" disabled={!formValue}>Send</button>
  
      </form>
    </span>)
  }
  
  

export {
    ChatApp
}
