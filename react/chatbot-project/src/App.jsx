import { useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages'

function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: `Hey there! 👋 I keep things simple. I can roll a die, flip a coin for tough decisions, or let you know today's date. What do you need?`,
    sender: 'robot',
    id: 'id1'
  }]);

  return (
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
