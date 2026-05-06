import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful ✅");
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Login</h2>
        <p style={styles.subheading}>Sign in to access your clients</p>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>Username</label>
          <input
            type="email"
            placeholder="Enter username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617", // 🔥 same dark background
  },
  card: {
    width: "380px",
    padding: "30px",
    borderRadius: "12px",
    background: "#0f172a",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)",
  },
  heading: {
    color: "#fff",
    marginBottom: "5px",
  },
  subheading: {
    color: "#94a3b8",
    marginBottom: "20px",
    fontSize: "14px",
  },
  label: {
    color: "#cbd5f5",
    fontSize: "14px",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #334155",
    background: "#020617",
    color: "#fff",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#38bdf8",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};