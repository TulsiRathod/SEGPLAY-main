export const SERVER_URL = "http://192.168.12.153:3000/";
export const ROUND_DELAY = 10;

export const toIndianCurrency = (num) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return curr;
};
