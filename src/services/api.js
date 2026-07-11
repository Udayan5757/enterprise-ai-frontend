import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "/api",
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});
export const uploadDocument = async (file) => {

    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/upload", formData);

    return response.data;
};

export const askQuestion = async (question) => {

    const response = await api.post("/chat", { question });

    return response.data;
};

export const checkHealth = async () => {

    const response = await api.get("/health");

    return response.data;
};

export default api;
