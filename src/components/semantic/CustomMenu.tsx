import React from 'react'
import { Menu, MenuProps } from 'semantic-ui-react'

const CustomMenu: React.FC<MenuProps> = ({ ...props }): React.ReactElement => {
  return <Menu {...props}>{props.children}</Menu>
}

export default CustomMenu
