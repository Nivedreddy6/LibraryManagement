import axios from "axios";

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV
        ? "http://localhost:3000"
        : "https://my-json-server.typicode.com/Nivedreddy6/LibraryManagement");

const api = axios.create({
    baseURL: API_BASE_URL
});

export default api;

