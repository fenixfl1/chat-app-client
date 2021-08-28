import React from 'react'
import { Message, MessageProps } from 'semantic-ui-react'

const CustomMessage: React.FC<MessageProps> = ({
  ...props
}): React.ReactElement => {
  return <Message {...props}>{props.children}</Message>
}

export default CustomMessage
