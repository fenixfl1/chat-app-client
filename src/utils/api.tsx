/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { WEB_SERVICE_API_LOGIN } from "../constant/routes";
import { UserData } from "../types";
import { createSession, getSessionToken } from "./session";

type RequestHeaders = {
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
};

const getResponseParams = (): RequestHeaders => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: getSessionToken(),
    },
  };
};

export function postRequest<T>(
  url: string,
  data: Record<string, unknown> | unknown[]
): Promise<AxiosResponse<T>> {
  const config = getResponseParams();
  const result = axios.post(url, data, config);

  return result;
}

export function putRequest<T>(
  url: string,
  data: Record<string, unknown>
): Promise<AxiosResponse<T>> {
  const config = getResponseParams();
  const result = axios.put(url, data, config);

  return result;
}

function getRequest<T>(url: string): Promise<AxiosResponse<T>> {
  const config = getResponseParams();

  return axios.get(url, config);
}

export const loginUser = (EMAIL: string, PASSWORD: string): void => {
  const login = postRequest<UserData>(WEB_SERVICE_API_LOGIN, {
    EMAIL,
    PASSWORD,
  });

  login.then((response) => {
    createSession(response.data);
    // eslint-disable-next-line no-console
    console.log({ user: response.data.email });
  });
};
