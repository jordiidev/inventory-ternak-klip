import useProducts from "../hooks/useProducts";
import StatsCard from "../components/dashboard/StatsCard";
import RecentProducts from "../components/dashboard/RecentProducts";
import Loader from "../components/common/Loader";
import { formatDate } from '../utils/formatDate'

export default function Dashboard() {
  const { products, loading } = useProducts();

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock_count, 0);

  const latestProduct =
    products.length > 0
      ? products.reduce((latest, current) =>
          new Date(current.last_updated) >
          new Date(latest.last_updated)
            ? current
            : latest
        )
      : null;

  const lastUpdated = latestProduct
    ? formatDate(latestProduct.last_updated)
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