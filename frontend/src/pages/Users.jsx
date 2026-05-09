import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Users() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Navbar />

        <div style={styles.content}>
          <h1>Users</h1>

          <div style={styles.card}>
            <h3>Total Users</h3>
            <p>120</p>
          </div>

          <div style={styles.card}>
            <h3>Active Users</h3>
            <p>95</p>
          </div>

          <div style={styles.card}>
            <h3>New Users</h3>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  content: {
    padding: "20px",
    background: "#f5f7fb",
    minHeight: "100vh",
  },
  card: {
    background: "#fff",
    padding: "20px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default Users;