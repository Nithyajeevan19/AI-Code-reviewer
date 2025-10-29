import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //FIXED: Better token check logic
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Validate token before redirecting
      validateTokenAndRedirect(token);
    }
  }, []);


  const validateTokenAndRedirect = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/history/all", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        navigate("/");
      } else {
        // Token is invalid, remove it
        localStorage.removeItem('token');
      }
    } catch (error) {
      localStorage.removeItem('token');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.jwt_token);
        setMessage("Login successful! Redirecting...");
        
        setTimeout(() => {
          navigate("/");
          window.location.reload(); // Ensure context refreshes
        }, 800);

      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("Server error. backend is not running");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-border/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-muted-foreground mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-lg gradient-primary hover:opacity-90 transition-smooth shadow-glow"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            {message && (
              <p className={`text-center text-sm font-medium ${
                message.includes('successful') || message.includes('✅') 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {message}
              </p>
            )}

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <span
                className="text-primary font-semibold cursor-pointer hover:underline"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
