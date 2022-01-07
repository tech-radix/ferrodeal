import axios from "axios";

export default axios.create({
  baseURL: "http://api.radixforce.com/api",
  headers: {
    "Content-type": "application/json"
  }
});