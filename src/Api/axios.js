import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-38286/us-central1/api",
  // baseURL: "http://127.0.0.1:5001/e-2024/us-central1/api",
  baseURL: "http://localhost:6700",
});

export { axiosInstance };
