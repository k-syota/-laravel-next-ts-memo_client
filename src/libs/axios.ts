import Axios from "axios";

const axios = Axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: "https://laravel-next-ts-memo-api-rlz8.vercel.app",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default axios;
