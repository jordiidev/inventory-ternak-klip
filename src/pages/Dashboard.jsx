import useProducts from "../hooks/useProducts";
import StatsCard from "../components/dashboard/StatsCard";
import RecentProducts from "../components/dashboard/RecentProducts";
import Loader from "../components/common/Loader";

export default function Dashboard() {
  const { products, loading } = useProducts();

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock_count, 0);

  const lastUpdated =
    products.length > 0
      ? new Date(
          Math.max(...products.map((p) => new Date(p.last_updated)))
        ).toLocaleString()
      : "-";
  
  if (loading) return <Loader />;

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>Dashboard</h2>

      <div className="grid">
        <StatsCard title="Total Products" bg={"#4BCBEB"} value={totalProducts} />
        <StatsCard title="Total Stock" bg={"#FE9496"} value={totalStock} />
        <StatsCard title="Last Updated" bg={"#9E58FF"} value={lastUpdated} />
      </div>

      <RecentProducts products={products} />
    </div>
  );
}