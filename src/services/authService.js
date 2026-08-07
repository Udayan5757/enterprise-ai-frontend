import api from "./api";

export const login = async (email, password) => {

    const response = await api.post("/auth/login", {
        email,
        password,
    });

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    return response.data;
};

export const register = async (name, email, password) => {

    const response = await api.post("/auth/register", {
        name,
        email,
        password,
    });

    return response.data;
};

export const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

};

export const isLoggedIn = () => {

    return !!localStorage.getItem("token");

};