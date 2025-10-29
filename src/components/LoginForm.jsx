<<<<<<< HEAD
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputContext } from "../context/InputContextProvider.jsx";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); 

  const { data } = useContext(InputContext);
  const navigate = useNavigate();

=======
import { useState } from "react";

export default function LoginForm() {

  const [formData, setFormData] = useState({ email: "", password: "" });
>>>>>>> a9c53d22bb1a54f6c80d6a8526e2b5ed459d1ca6
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://ai-code-reviewer-cvmi.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.jwt_token);
        setMessage("Login successful!");
        navigate("/"); 
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      setMessage(`Server side error: ${err.message}`);
    }
  };

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); 
    }
  }, []);



  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-300 to-purple-500 p-40">
      <form
        onSubmit={handleSubmit}
        className="w-100 mx-auto mt-8 p-10 bg-white shadow rounded-2xl h-80"
      >
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-center text-sm mt-2 text-gray-700">{message}</p>

        <p className="text-center mt-2 text-sm">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
=======

  return (
    <form  className="max-w-sm mx-auto mt-20 p-6 bg-white shadow rounded">   
      <h2 className="text-xl font-bold text-center mb-4">Login</h2>
      <input
        type="email" 
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Login
      </button>

    </form>

>>>>>>> a9c53d22bb1a54f6c80d6a8526e2b5ed459d1ca6
  );
}
