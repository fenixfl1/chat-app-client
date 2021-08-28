import React from 'react'
import { Form, FormProps } from 'semantic-ui-react'

const CustomForm: React.FC<FormProps> = ({
  error = true,
  ...props
}): React.ReactElement => {
  return (
    <Form error={error} {...props}>
      {props.children}
    </Form>
  )
}

export default CustomForm
