import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mCOK6KBCmu-64BCrPFR9O5KjCng9WXrfd_5x36HiQH0",
  },
});
