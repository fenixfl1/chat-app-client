import React from 'react'
import { Grid, GridColumnProps } from 'semantic-ui-react'

const { Column } = Grid

const CustomColumn: React.FC<GridColumnProps> = ({
  ...props
}): React.ReactElement => {
  return <Column {...props}>{props.children}</Column>
}

export default CustomColumn
