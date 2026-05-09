import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div style={{ width: "100%" }}>
        <Navbar />

        <div style={styles.content}>
          <h1>Dashboard</h1>
          <p>Welcome to Travel Admin Panel ✈️</p>

          <div style={styles.cardsContainer}>
            <div style={styles.card}>
              <h3>Total Bookings</h3>
              <p>25</p>
            </div>

            <div style={styles.card}>
              <h3>Total Users</h3>
              <p>120</p>
            </div>

            <div style={styles.card}>
              <h3>Packages</h3>
              <p>15</p>
            </div>
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

  cardsContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "220px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default Dashboard;