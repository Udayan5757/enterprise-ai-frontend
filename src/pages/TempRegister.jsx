import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await register(name, email, password);
            alert("Registration successful. Please log in.");
            navigate("/login");
        } catch (err) {
            console.error(err);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
            <form
                onSubmit={handleRegister}
                className="w-[400px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8"
            >
                <h1 className="text-4xl font-bold text-white text-center mb-2">Register</h1>
                <p className="text-center text-gray-300 mb-8">Create a new account</p>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

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
                    Register
                </button>

                <p className="text-center text-gray-300 mt-6">
                    Already have an account?
                    <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold ml-2">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
