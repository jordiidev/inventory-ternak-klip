import Loader from "../common/Loader";

function getStockBadge(stock) {
  if (stock < 10) return "badge badge-red";
  if (stock < 20) return "badge badge-yellow";
  return "badge badge-green";
}

export default function ProductTable({ products, loading }) {
  if (loading) return <Loader />;

  return (
    <div className="table-container">
      <h3 style={{ marginBottom: "12px" }}>List Products</h3>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Last Updated</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>
                <span className={getStockBadge(p.stock_count)}>
                  {p.stock_count}
                </span>
              </td>
              <td>
                {new Date(p.last_updated).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}