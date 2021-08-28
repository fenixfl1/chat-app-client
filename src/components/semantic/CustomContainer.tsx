import React from 'react'
import { Container, ContainerProps } from 'semantic-ui-react/'

const CustomContainer: React.FC<ContainerProps> = ({
  fluid = true,
  textAlign = 'right',
  ...props
}): React.ReactElement => {
  return (
    <Container fluid={fluid} textAlign={textAlign} {...props}>
      {props.children}
    </Container>
  )
}

export default CustomContainer
