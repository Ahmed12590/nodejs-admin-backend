import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AllPackages() {
  const packages = [
    { id: 1, name: "Dubai Tour", price: "$500" },
    { id: 2, name: "Turkey Tour", price: "$800" },
    { id: 3, name: "Malaysia Tour", price: "$600" },
    { id: 4, name: "Singapor Tour", price: "$600" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Navbar />

        <div style={styles.content}>
          <h1>All Packages</h1>

          <div style={styles.table}>
            {packages.map((pkg) => (
              <div key={pkg.id} style={styles.row}>
                <span>{pkg.name}</span>
                <span>{pkg.price}</span>
              </div>
            ))}
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
  table: {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #ddd",
  },
};

export default AllPackages;