import { io } from "socket.io-client";

export const SERVER_URL = "http://20.219.164.153/";
export const ROUND_DELAY = 60;
export const SOCKET_URL = "http://20.219.164.153:8000/";

export const socket = io(SOCKET_URL);

export const toIndianCurrency = (num) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return curr;
};

export const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
