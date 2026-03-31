import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="main">
          <Navbar setSidebarOpen={setSidebarOpen} />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </div>

        {/* overlay mobile */}
        {sidebarOpen && (
          <div className="overlay" onClick={() => setSidebarOpen(false)} />
        )}
      </div>
    </BrowserRouter>
  );
}