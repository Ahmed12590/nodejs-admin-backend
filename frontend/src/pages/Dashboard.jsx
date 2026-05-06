import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Navbar />

        <div style={{ padding: "20px" }}>
          <h1>Dashboard Page</h1>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;