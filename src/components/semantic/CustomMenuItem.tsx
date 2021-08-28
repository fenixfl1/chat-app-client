import React from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'

const { Item } = Menu

const CustomMenuItem: React.FC<MenuItemProps> = ({
  ...props
}): React.ReactElement => {
  return <Item {...props}>{props.children}</Item>
}

export default CustomMenuItem
