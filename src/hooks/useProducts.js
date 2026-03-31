import { useEffect, useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")

    if (!error) setProducts(data)
    setLoading(false)
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