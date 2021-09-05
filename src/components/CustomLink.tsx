import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

const CustomLink: React.FC<LinkProps> = ({ ...props }): React.ReactElement => {
  return <Link {...props}>{props.children}</Link>
}

export default CustomLink
