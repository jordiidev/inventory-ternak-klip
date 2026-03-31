export default function RecentProducts({ products }) {
  const recent = [...products]
    .sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated))
    .slice(0, 5);

  return (
    <div className="table-container">
      <h3 style={{ marginBottom: "12px" }}>Recent Updates</h3>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Last Updated</th>
          </tr>
        </thead>

        <tbody>
          {recent.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.stock_count}</td>
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