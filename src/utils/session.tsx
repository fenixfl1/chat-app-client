import Cookies from "js-cookie";
import { UserData } from "../types";

const COOKIE_KEY_USER_DATA = "user-data";
const COOKIE_KEY_SESSION_TOKEN = "user-session";

export const isLoggedIn = (): boolean => {
  const requiredCookiesKeys = [COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA];

  return !requiredCookiesKeys.some(
    (cookieKey) => Cookies.get(cookieKey) === undefined
  );
};

export const createSession = (user: UserData): void => {
  const { username, sessionCookie, userId, email } = user;
  const { token: sessionToken, expiration: sessionExpiration } = sessionCookie;
  const cookiesExpiration = new Date(sessionExpiration);

  const sessionInfo = JSON.stringify({
    username,
    userId,
    email,
  });

  Cookies.set(COOKIE_KEY_USER_DATA, sessionInfo, {
    expires: cookiesExpiration,
  });

  Cookies.set(COOKIE_KEY_SESSION_TOKEN, `Bearer ${sessionToken}`, {
    expires: cookiesExpiration,
  });
};

export const removeSession = (): void => {
  const requiredCookiesKeys = [COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA];

  requiredCookiesKeys.forEach((cookieKey) => Cookies.remove(cookieKey));
};

export const getSessionInfo = (): UserData => {
  return isLoggedIn() ? Cookies.getJSON(COOKIE_KEY_USER_DATA) : {};
};

export const getSessionToken = (): string => {
  return Cookies.get(COOKIE_KEY_SESSION_TOKEN) || "";
};
