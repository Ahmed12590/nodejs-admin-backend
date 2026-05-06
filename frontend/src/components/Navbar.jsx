import React from "react";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h2 style={{ color: "#fff" }}>Admin Dashboard</h2>

      <div>
        <span style={{ color: "#fff", marginRight: "15px" }}>
          Welcome, Admin
        </span>
        <button style={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    height: "60px",
    backgroundColor: "#01245E",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  logoutBtn: {
    padding: "6px 12px",
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Navbar;