export default function StatsCard({ title, value, bg }) {
  return (
    <div className="card" style={{ backgroundColor: bg }}>
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  );
}