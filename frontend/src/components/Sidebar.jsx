import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={{ color: "#fff", marginBottom: "30px" }}>Menu</h2>

      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/bookings" style={styles.link}>Bookings</Link>
      <Link to="/users" style={styles.link}>Users</Link>
      <Link to="/add-package"style={styles.link}>Add Package</Link>
      <Link to="/all-packages"style={styles.link}>All Packages</Link>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    backgroundColor: "rgb(2, 6, 23)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "15px",
    fontSize: "16px",
  },
};

export default Sidebar;