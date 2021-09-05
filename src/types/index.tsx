export type UserData = {
  loading: boolean;
  errorMessage: string | undefined;
  username: string;
  userId: string;
  email: string;
  sessionCookie: {
    token: string;
    expiration: string;
  };
};

export type LoginUser = {
  USERNAME: string;
  PASSWORD: string;
};
