import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddPackage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Package Added ✅");

    // yahan baad me backend API call lagayenge
    console.log({ title, price });

    setTitle("");
    setPrice("");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Navbar />

        <div style={styles.content}>
          <h1>Add Package</h1>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Package Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="number"
              placeholder="Package Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>
              Add Package
            </button>
          </form>
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
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#01245E",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AddPackage;