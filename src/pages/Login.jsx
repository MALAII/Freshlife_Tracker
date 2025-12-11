import React,{ useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    if(login(email,password)) navigate("/");
    else alert("Invalid email or password!");
  }

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p><Link to="/forgot">Forgot Password?</Link></p>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  )
}

export default Login;
