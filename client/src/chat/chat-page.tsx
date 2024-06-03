import { Button, Flex, Input, Typography } from 'antd'
import React from 'react'
import { useRecoilState } from 'recoil'
import userState from '../states/is-user-logged-in'
import './css/chat-page.css'
import Message from './message'

const ChatPage = () => {
  const [user] = useRecoilState(userState)

  return (
    <Flex justify="between" vertical id="chat-page">
      <Flex className="message-window" vertical>
        <Message isSent={true} />
        <Message isSent={false} />
      </Flex>

      <Flex gap="middle" align="center" className="message-input-container">
        <Input placeholder='Type a message...' className="message-input" />
        <Button type="primary" className="send-message-btn">
          Send
        </Button>
      </Flex>
    </Flex>
  )
}

export default ChatPage
