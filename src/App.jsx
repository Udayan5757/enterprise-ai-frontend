import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
import { isLoggedIn } from "./services/authService";

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          isLoggedIn()
            ? <Navigate to="/dashboard" replace />
            : <Landing />
        }
      />

      <Route
        path="/login"
        element={
          isLoggedIn()
            ? <Navigate to="/dashboard" replace />
            : <Login />
        }
      />

      <Route
        path="/register"
        element={
          isLoggedIn()
            ? <Navigate to="/dashboard" replace />
            : <Register />
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}