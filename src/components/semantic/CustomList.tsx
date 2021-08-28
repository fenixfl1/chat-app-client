import React from 'react'
import { List, ListProps } from 'semantic-ui-react'

const CustomList: React.FC<ListProps> = ({ ...props }): React.ReactElement => {
  return <List {...props}>{props.children}</List>
}

export default CustomList
