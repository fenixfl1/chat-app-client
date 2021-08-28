import React from 'react'
import { Grid, GridProps } from 'semantic-ui-react'

const CustomGrid: React.FC<GridProps> = ({
  container = true,
  textAlign = 'center',
  verticalAlign = 'middle',
  ...props
}): React.ReactElement => {
  return (
    <Grid
      textAlign={textAlign}
      verticalAlign={verticalAlign}
      container={container}
      {...props}
    >
      {props.children}
    </Grid>
  )
}

export default CustomGrid
