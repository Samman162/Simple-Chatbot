import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage';
import { ChatMessages } from './components/ChatMessages';
import './App.css'

function App(){
  const [chatMessages,setChatMessages]=useState([{
    message:"Hello bro", 
    sender:"user",
    id:"id1"
  },{
    message:"Hello! How can I help you?", 
    sender:"robot",
    id:"id2"
  },{
    message:"Tell me todays date", 
    sender:"user",
    id:"id3"
  },{
    message:"Today is January 26", 
    sender:"robot",
    id:"id4"
  }])
  return(
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />  
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
