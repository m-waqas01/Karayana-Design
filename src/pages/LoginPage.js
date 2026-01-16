import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // redirect to dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Card container */}
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="Create Category.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-orange-500 mb-16">Karayana</h1>
          <h2 className="text-xl font-semibold mb-4 ">Admin Login</h2>
          <p className="text-gray-500 mb-6 ">
            Welcome back! Please enter your details to login.
          </p>

          <form className="w-full" onSubmit={handleLogin}>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="w-full mt-20 bg-orange-500 text-white py-3 rounded hover:bg-orange-600 font-semibold transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
