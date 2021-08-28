import React from 'react'
import { List, ListItemProps } from 'semantic-ui-react'

const { Item } = List

const CustomListItem: React.FC<ListItemProps> = ({
  ...props
}): React.ReactElement => {
  return <Item {...props}>{props.children}</Item>
}

export default CustomListItem
