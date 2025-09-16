import { useState } from "react";

export default function LoginForm() {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-300 to-purple-500 p-40">
      <form  className="w-100 mx-auto mt-8 p-10 bg-white shadow rounded-2xl h-80 ">   
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
    </div>

  );
}
