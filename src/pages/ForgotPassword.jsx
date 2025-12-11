import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/ForgotPassword.css"

function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = e => {
    e.preventDefault();
    if(resetPassword(email,newPassword)) {
      alert("Password reset successful! Login now.");
      navigate("/login");
    } else alert("Email not found!");
  }

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="New Password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} required />
        <button type="submit">Reset Password</button>
      </form>
      <p>Remembered? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default ForgotPassword;
