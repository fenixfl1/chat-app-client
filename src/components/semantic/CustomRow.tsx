import React from "react";
import { Grid, GridRowProps } from "semantic-ui-react";

const { Row } = Grid;

const CustomRow: React.FC<GridRowProps> = ({
  textAlign = "center",
  verticalAlign = "top",
  ...props
}): React.ReactElement => {
  return (
    <Row textAlign={textAlign} verticalAlign={verticalAlign} {...props}>
      {props.children}
    </Row>
  );
};

export default CustomRow;
