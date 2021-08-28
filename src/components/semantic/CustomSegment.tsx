import React from 'react'
import { Segment, SegmentProps } from 'semantic-ui-react'

const CustomSegment: React.FC<SegmentProps> = ({
  ...props
}): React.ReactElement => {
  return <Segment {...props}>{props.children}</Segment>
}

export default CustomSegment
