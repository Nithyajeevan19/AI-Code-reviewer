// frontend/src/api/apiClient.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

// For dev - set a default dev user id header (replace with a real id or remove when using auth)
const DEV_USER_ID = import.meta.env.VITE_DEV_USER_ID || "";
if (DEV_USER_ID) {
  api.defaults.headers.common["x-user-id"] = DEV_USER_ID;
}

export default api;
