import { useEffect, useState } from "react";
import { checkHealth } from "../services/api";

function Navbar() {

    const [backendStatus, setBackendStatus] = useState("checking");

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

        <div className="navbar">

            <div className="navbar-content">

                <h2>Enterprise AI Knowledge Assistant</h2>

                <span className={`status-badge ${backendStatus}`}>
                    Backend: {backendStatus}
                </span>

            </div>

        </div>

    );

}

export default Navbar;
