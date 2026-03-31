import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <div className="main">
          <Navbar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}