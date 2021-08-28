import React from 'react'
import { Image, ImageProps } from 'semantic-ui-react'

const CustomImage: React.FC<ImageProps> = ({
  ...props
}): React.ReactElement => {
  return <Image {...props}>{props.children}</Image>
}

export default CustomImage
