import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/register";
import Home from "./pages/Home";

import ProtectedRoute from "./components/ProtectedRoute";
import { isLoggedIn } from "./services/authService";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/login"
                element={
                    isLoggedIn()
                        ? <Navigate to="/" replace />
                        : <Login />
                }
            />

            <Route
                path="/register"
                element={
                    isLoggedIn()
                        ? <Navigate to="/" replace />
                        : <Register />
                }
            />

            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>

    );

}

export default App;