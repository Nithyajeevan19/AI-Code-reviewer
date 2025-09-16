import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {

  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <form className="max-w-sm mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold text-center mb-4">Register</h2>
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
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
      <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Register
      </button>
      
      <p className="text-center mt-2 text-sm">
        Already have an account? <span className="text-blue-500 cursor-pointer" >Login</span> 
      </p>
    </form>
  );

}
