import { AuthenticateUserAction } from "../actions/user";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REQUEST_LOGIN,
} from "../constant/actions";
import { UserData } from "../types";

export type UserState = {
  userData: UserData;
  loading: boolean;
  isLoggedIn: boolean;
  errorMessage: string | undefined;
};

export const initialState: UserState = {
  userData: {} as UserData,
  loading: false,
  isLoggedIn: false,
  errorMessage: undefined,
};

const AuthReducer = (
  state: UserState = initialState,
  action: AuthenticateUserAction
) => {
  switch (action.type) {
    case REQUEST_LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        userData: action.user,
        isLoggedIn: true,
        loading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: action.message,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
