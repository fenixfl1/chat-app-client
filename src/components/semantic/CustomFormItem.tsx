import React from 'react'
import { Form, FormInputProps } from 'semantic-ui-react'

const CustomFormItem: React.FC<FormInputProps> = ({
  fluid = true,
  size = 'large',
  iconPosition = 'left',
  ...props
}): React.ReactElement => {
  return (
    <Form.Input
      fluid={fluid}
      size={size}
      iconPosition={iconPosition}
      {...props}
    >
      {props.children}
    </Form.Input>
  )
}

export default CustomFormItem
