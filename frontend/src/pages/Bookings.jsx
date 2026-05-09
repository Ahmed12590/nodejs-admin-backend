import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Bookings() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Navbar />

        <div style={styles.content}>
          <h1>Bookings</h1>

          <div style={styles.card}>
            <h3>Total Bookings</h3>
            <p>25</p>
          </div>

          <div style={styles.card}>
            <h3>Pending Bookings</h3>
            <p>8</p>
          </div>

          <div style={styles.card}>
            <h3>Completed Bookings</h3>
            <p>17</p>
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

export default Bookings;