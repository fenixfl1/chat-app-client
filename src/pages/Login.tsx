import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { InputOnChangeData } from "semantic-ui-react";
import CustomLink from "../components/CustomLink";
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
import { PATH_MAIN } from "../constant/routes";
import { loginUser, useAuthDispatch, useAuthState } from "../context";
import { LoginUser } from "../types";

const Login = (): React.ReactElement => {
  const dispatch = useAuthDispatch();
  const { loading, errorMessage, isLoggedIn } = useAuthState();
  const [formValue, setFormValue] = useState<LoginUser>({
    USERNAME: "",
    PASSWORD: "",
  });

  if (isLoggedIn) {
    return <Redirect to={PATH_MAIN} />;
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    { name, value }: InputOnChangeData
  ) => {
    const state = { [name]: value };
    setFormValue(Object.assign({}, formValue, state));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginUser(dispatch, formValue);
  };

  return (
    <CustomGrid container={false} style={{ height: "100vh" }}>
      <CustomColumn style={{ maxWidth: "450px" }}>
        <CustomHeader as={"h2"} color={"teal"}>
          Login
          {errorMessage && (
            <CustomMessage negative>{errorMessage}</CustomMessage>
          )}
        </CustomHeader>
        <CustomForm size={"large"} onSubmit={handleOnSubmit}>
          <CustomSegment stacked>
            <CustomFormItem
              name={"USERNAME"}
              icon={"user"}
              placeholder={"Username"}
              onChange={handleOnChange}
            />
            <CustomFormItem
              name={"PASSWORD"}
              icon={"lock"}
              placeholder={"Password"}
              type={"password"}
              onChange={handleOnChange}
            />
            <CustomButton type={"submit"} size={"large"} loading={loading}>
              Login
            </CustomButton>
          </CustomSegment>
        </CustomForm>
        <CustomMessage>
          ¿Aun no tienes una cuenta?{" "}
          <CustomLink to={"#"}>Registrate</CustomLink>
        </CustomMessage>
      </CustomColumn>
    </CustomGrid>
  );
};

export default Login;
