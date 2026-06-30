"use client";

import { useEffect, useState, useCallback } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✏️ edit modal
  const [editingProduct, setEditingProduct] = useState(null);

  // 🗑 delete modal
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  // 📦 fetch (stable)
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/products", {
        cache: "no-store",
      });

      const data = await res.json();
      setProducts(data?.data || []);
    } catch (err) {
      console.error("Fetch products failed:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // 🗑 open delete modal
  const handleDeleteClick = (product) => {
    if (!product?.id) return;
    setDeletingProduct(product);
  };

  // 🗑 confirm delete
  const handleConfirmDelete = async () => {
    if (!deletingProduct?.id) return;

    setDeleteLoading(true);

    try {
      const res = await fetch(
        `/api/products/${deletingProduct.id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error("Delete failed");

      // UI update (optimistic local sync)
      setProducts((prev) =>
        prev.filter((p) => p.id !== deletingProduct.id)
      );

      setDeletingProduct(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  // ✏️ open edit
  const handleEditClick = (product) => {
    if (!product?.id) return;

    setEditingProduct(product);

    setEditForm({
      name: product.name || "",
      price: product.price || "",
      description: product.description || "",
      image: null,
    });
  };

  // 💾 update product
  const handleUpdate = async () => {
    if (!editingProduct?.id) return;

    const formData = new FormData();
    formData.append("name", editForm.name);
    formData.append("price", editForm.price);
    formData.append("description", editForm.description);

    if (editForm.image) {
      formData.append("image", editForm.image);
    }

    try {
      const res = await fetch(
        `/api/products/${editingProduct.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Update failed");
      }

      // UI sync (replace updated item)
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id ? data.data : p
        )
      );

      setEditingProduct(null);
    } catch (err) {
      alert(err.message);
    }
  };

  return {
    products,
    loading,

    // edit
    editingProduct,
    setEditingProduct,
    editForm,
    setEditForm,
    handleEditClick,
    handleUpdate,

    // delete
    deletingProduct,
    setDeletingProduct,
    handleDeleteClick,
    handleConfirmDelete,
    deleteLoading,

    // optional external refresh
    fetchProducts,
  };
}