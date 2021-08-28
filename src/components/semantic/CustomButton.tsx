import React from 'react'
import { Button, ButtonProps } from 'semantic-ui-react'

const CustomButton: React.FC<ButtonProps> = ({
  color = 'teal',
  fluid = true,
  ...props
}): React.ReactElement => {
  return (
    <Button fluid={fluid} color={color} {...props}>
      {props.children}
    </Button>
  )
}

export default CustomButton
