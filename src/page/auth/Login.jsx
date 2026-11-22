import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../component/context/AuthContext";
import PageTransition from "../../component/PageTransition";
import "../sitePages.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter your email and password");
      return;
    }
    const name = email.trim().split("@")[0].replace(/[._-]/g, " ");
    login({ name: name.charAt(0).toUpperCase() + name.slice(1), email: email.trim() });
    toast.success("Welcome back!");
    navigate("/");
  };

  return <PageTransition>
    <main className="site-page auth-page">
      <div className="container auth-card">
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Login to your account</h1>
        <p className="page-intro">Sign in to continue shopping and keep your favorites close.</p>
        <form className="site-form" onSubmit={handleSubmit}>
          <label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required /></label>
          <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required minLength={4} /></label>
          <button className="site-button" type="submit">Login</button>
        </form>
        <p className="form-note">Demo sign-in: this project currently has no authentication server. The form creates a local demo session in this browser only.</p>
        <Link className="back-link" to="/">← Back to shopping</Link>
      </div>
    </main>
  </PageTransition>;
}
