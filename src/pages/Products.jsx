import useProducts from "../hooks/useProducts";
import ProductTable from "../components/products/ProductTable";

export default function Products() {
  const { products, loading } = useProducts();

  return (
    <div>
      <h2>Products</h2>
      <ProductTable products={products} loading={loading} />
    </div>
  );
}