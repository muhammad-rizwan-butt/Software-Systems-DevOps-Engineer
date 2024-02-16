import axios from "axios";

// export const baseURL = "http://localhost:4000/";
export const baseURL = "https://siyaahat.be.rectocode.com/";

export const Axios = axios.create({
  baseURL,
});
