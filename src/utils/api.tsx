import axios, { AxiosResponse } from "axios";
import { getSessionToken } from "./session";
import socketio from "socket.io-client";
import { SOCKET_SERVICE_URL } from "../constant/routes";

export const socket = socketio(`${SOCKET_SERVICE_URL}`);

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

export function getRequest<T>(url: string): Promise<AxiosResponse<T>> {
  const config = getResponseParams();

  return axios.get(url, config);
}
