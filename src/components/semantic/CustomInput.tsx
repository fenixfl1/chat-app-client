import React from 'react'
import { Input, InputProps } from 'semantic-ui-react'

const CustomInput: React.FC<InputProps> = ({
  type = 'text',
  size = 'small',
  fluid = true,
  transparent = false,
  iconPosition = 'left',
  labelPosition = 'left',
  ...props
}): React.ReactElement => {
  return (
    <Input
      iconPosition={iconPosition}
      labelPosition={labelPosition}
      transparent={transparent}
      type={type}
      size={size}
      fluid={fluid}
      {...props}
    >
      {props.children}
    </Input>
  )
}

export default CustomInput
