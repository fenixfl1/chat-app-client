/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { InputOnChangeData } from "semantic-ui-react";
import {
  CustomButton,
  CustomColumn,
  CustomForm,
  CustomFormItem,
  CustomGrid,
  CustomHeader,
  CustomMessage,
  CustomSegment,
} from "../components/semantic";
import { loginUser } from "../utils/api";

type LoginUser = {
  EMAIL: string;
  PASSWORD: string;
};

class Login extends React.Component {
  constructor(props: never) {
    super(props);

    this.state = {
      EMAIL: "",
      PASSWORD: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    //
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    { name, value }: InputOnChangeData
  ) => this.setState({ [name]: value });

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { EMAIL, PASSWORD } = this.state as LoginUser;

    loginUser(EMAIL, PASSWORD);
  };

  render() {
    return (
      <CustomGrid container={false} style={{ height: "100vh" }}>
        <CustomColumn style={{ maxWidth: "450px" }}>
          <CustomHeader as={"h2"} color={"teal"}>
            Inicia Sesion
          </CustomHeader>
          <CustomForm size={"large"} onSubmit={this.handleSubmit}>
            <CustomSegment stacked>
              <CustomFormItem
                name={"EMAIL"}
                icon={"user"}
                placeholder={"E-mail address"}
                onChange={this.handleChange}
              />
              <CustomFormItem
                name={"PASSWORD"}
                icon={"lock"}
                placeholder={"Password"}
                type={"password"}
                onChange={this.handleChange}
              />
              <CustomButton type={"submit"} size={"large"}>
                Login
              </CustomButton>
            </CustomSegment>
          </CustomForm>
          <CustomMessage>
            ¿Aun no tienes una cuenta? <a href={"#"}>Registrate</a>
          </CustomMessage>
        </CustomColumn>
      </CustomGrid>
    );
  }
}

export default Login;
