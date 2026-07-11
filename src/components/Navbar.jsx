import { useEffect, useState } from "react";
import { checkHealth } from "../services/api";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function Navbar() {

    const navigate = useNavigate();
    const [backendStatus, setBackendStatus] = useState("checking");

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    useEffect(() => {

        const loadHealth = async () => {

            try {
                await checkHealth();
                setBackendStatus("online");
            } catch {
                setBackendStatus("offline");
            }

        };

        loadHealth();

    }, []);

    return (
        <div className="navbar-content">

            <h2>Enterprise AI Knowledge Assistant</h2>

            <div className="navbar-actions">

                <span className={`status-badge ${backendStatus}`}>
                    <span className="status-dot"></span>
                    Backend {backendStatus}
                </span>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Navbar;