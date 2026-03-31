import { useEffect, useState } from "react"
import { supabase } from "../services/supabaseClient"
import { formatDate } from "../utils/formatDate"

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")

    if (!error) {
    const formatted = data.map((p) => ({
      ...p,
      last_updated_formatted: formatDate(p.last_updated)
    }));

    // setProducts(formatted);

    setProducts(formatted)
    setLoading(false)
  }
  }

  useEffect(() => {
    fetchProducts()

    const channel = supabase
      .channel("products")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        fetchProducts
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
      setLoading(true)
    }
  }, [])

  return { products, loading }
}