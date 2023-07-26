import axios from "axios";

const KEY = "AIzaSyAiJcf07RIQ2zmC-BfLzT0gpq2w2Du_hM8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //     // "Access-Control-Allow-Headers":
  //     //   "Content-Type, X-Auth-Token, Origin, Authorization",
  //   },
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
