import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REQUEST_LOGIN,
} from '../constant/actions'
import { LoginUser, UserData } from '../types'

type RequestLoginAction = {
  type: typeof REQUEST_LOGIN
  data: LoginUser
}

type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS
  user: UserData
}

type LoginFailureAction = {
  type: typeof LOGIN_FAILURE
  message: string
}

export const requestLogin = (data: LoginUser): RequestLoginAction => {
  return {
    type: REQUEST_LOGIN,
    data,
  }
}

export const loginSuccess = (user: UserData): LoginSuccessAction => {
  return {
    type: LOGIN_SUCCESS,
    user,
  }
}

export const loginFailure = (message: string): LoginFailureAction => {
  return {
    type: LOGIN_FAILURE,
    message,
  }
}

export type AuthenticateUserAction =
  | RequestLoginAction
  | LoginSuccessAction
  | LoginFailureAction
