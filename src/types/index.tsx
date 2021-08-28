type UserData = {
  username: string;
  userId: string;
  email: string;
  sessionCookie: {
    token: string;
    expiration: string;
  };
};

export type { UserData };
