export default function Navbar({ setSidebarOpen }) {
  return (
   <div className="navbar">
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        ☰
      </button>

      <h3>Inventory Dashboard</h3>
    </div>
);
}