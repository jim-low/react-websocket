import { Flex, Typography } from 'antd'
import React from 'react'

const Message = ({ isSent }: { isSent: boolean }) => {
  return (
    <Flex justify={isSent ? "end" : "start"} style={{ width: "100%" }}>
      <Typography.Paragraph>
        Hello world
      </Typography.Paragraph>
    </Flex>
  )
}

export default Message
