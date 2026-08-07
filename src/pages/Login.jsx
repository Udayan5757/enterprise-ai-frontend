import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            await login(email, password);

            alert("Login Successful");

            navigate("/dashboard", { replace: true });

        } catch (err) {

            alert("Invalid Email or Password");

            console.error(err);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">

            <form
                onSubmit={handleLogin}
                className="w-[400px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8"
            >

                <h1 className="text-4xl font-bold text-white text-center mb-2">
                    Enterprise AI
                </h1>

                <p className="text-center text-gray-300 mb-8">
                    Sign in to continue
                </p>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold"
                >
                    Login
                </button>

                <p className="text-center text-gray-300 mt-6">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-400 hover:text-blue-300 font-semibold ml-2"
                    >
                        Register
                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Login;