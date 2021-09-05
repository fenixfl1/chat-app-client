import { AxiosResponse } from 'axios'
import {
  AuthenticateUserAction,
  loginFailure,
  loginSuccess,
  requestLogin,
} from '../actions/user'
import { WEB_SERVICE_API_LOGIN } from '../constant/routes'
import { LoginUser, UserData } from '../types'
import { postRequest } from '../utils/api'
import { createSession } from '../utils/session'

export async function loginUser(
  dispatch: React.Dispatch<AuthenticateUserAction>,
  payload: LoginUser
) {
  try {
    dispatch(requestLogin(payload))
    const response = postRequest(WEB_SERVICE_API_LOGIN, payload)
    const data = (await response) as AxiosResponse<UserData>

    if (data.data.email) {
      dispatch(loginSuccess(data.data))
      createSession(data.data as unknown as UserData)

      return data
    }

    throw new Error(data.data.errorMessage)
  } catch ({ message }) {
    dispatch(loginFailure(message as string))
  }
}
