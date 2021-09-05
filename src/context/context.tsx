import React, { createContext, useContext, useReducer } from "react";
import { Socket } from "socket.io-client";
import { AuthenticateUserAction } from "../actions/user";
import { socket } from "../utils/api";
import AuthReducer, { initialState, UserState } from "./reducer";

const SocketContext = createContext<Socket>({} as Socket);
const AuthStateContext = createContext<UserState>({} as UserState);
const AuthDispatchContext = createContext<
  React.Dispatch<AuthenticateUserAction>
>(() => null);

export function useSocketContext() {
  const context = useContext(SocketContext);

  if (context === undefined) {
    throw new Error("useSocketContext must be used within a AuthProvider");
  }

  return context;
}

export function useAuthState() {
  const context = useContext<UserState>(AuthStateContext);

  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error("AuthDispatchContext must be used within a AuthProvider");
  }

  return context;
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        <SocketContext.Provider value={socket}>
          {children}
        </SocketContext.Provider>
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
