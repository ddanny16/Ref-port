import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        const token = `fake-jwt-token-${user.id}`;
        localStorage.setItem("token", token);
        navigate("/dashboard"); // 🔥 Redirect to Dashboard
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Error connecting to server");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      {error && <p className="error">{error}</p>}
      <form className="post-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
