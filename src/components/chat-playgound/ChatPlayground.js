import React, { useEffect, useState } from 'react'
import { conversations } from '../../mock-data/MockData'
import Message from '../message/Message'
import './ChatPlayground.scss'

const ChatPlayground = () => {
  const [messageHistory, setMessageHistory] = useState([])

  useEffect(() => {
    // TODO : Fetch the details from the local storage or session storage later
    setMessageHistory([...conversations])
  }, [])

  return (
    <div className='chat-playground d-flex'>
        <div className='chat-playground-prompt-messages'>
          {messageHistory?.map((con, idx) => (
            <Message key={idx} details={con} />
          ))}
        </div>
        <div className='chat-playground-prompt-input'></div>
    </div>
  )
}

export default ChatPlayground