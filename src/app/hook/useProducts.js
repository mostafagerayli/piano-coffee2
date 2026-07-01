"use client";

import { useCallback, useEffect, useState } from "react";
import { productService } from "../service/product.service";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const data = await productService.getAll();

      setProducts(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    setProducts,
    loading,
    fetchProducts,
  };
}