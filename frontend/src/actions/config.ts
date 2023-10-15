import axios from "axios";

const YelpCamp = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

export default YelpCamp;
