import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddPackage from "./pages/AddPackage";
import AllPackages from "./pages/AllPackages";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-package" element={<AddPackage />} />
        <Route path="/all-packages" element={<AllPackages />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;