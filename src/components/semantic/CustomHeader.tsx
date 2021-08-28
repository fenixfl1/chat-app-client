import React from 'react'
import { Header, HeaderProps } from 'semantic-ui-react'

const CustomHeader: React.FC<HeaderProps> = ({
  size = 'medium',
  textAlign = 'center',
  ...props
}): React.ReactElement => {
  return (
    <Header textAlign={textAlign} size={size} {...props}>
      {props.children}
    </Header>
  )
}

export default CustomHeader
