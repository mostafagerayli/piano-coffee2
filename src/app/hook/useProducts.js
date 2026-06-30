"use client";

import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [updateLoading, setUpdateLoading] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    product_type: "",
  });

  // 📦 FETCH
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/products", {
        cache: "no-store",
      });

      const text = await res.text(); // 👈 مهم

      let data;
      try {
        data = text ? JSON.parse(text) : null;
      } catch (err) {
        console.error("Invalid JSON:", text);
        data = null;
      }

      setProducts(Array.isArray(data?.data) ? data.data : []);
    } catch (err) {
      console.error("Fetch products failed:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // 🗑 OPEN DELETE
  const handleDeleteClick = (product) => {
    if (!product?.id) return;
    setDeletingProduct(product);
  };

  // 🗑 CONFIRM DELETE
  const handleConfirmDelete = async () => {
    if (!deletingProduct?.id) return;

    setDeleteLoading(true);

    try {
      const res = await fetch(`/api/products/${deletingProduct.id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Delete failed");

      setProducts((prev) => prev.filter((p) => p.id !== deletingProduct.id));
      toast.success('محصول با موفقیت حذف شد')

      setDeletingProduct(null);
    } catch (err) {
      toast.error(err.message)
    } finally {
      setDeleteLoading(false);
    }
  };

  // ✏️ OPEN EDIT
  const handleEditClick = (product) => {
    if (!product?.id) return;

    setEditingProduct(product);

    setEditForm({
      name: product.name || "",
      price: String(product.price || ""),
      description: product.description || "",
      image: null,
      product_type: product.product_type || "", // 👈 اضافه شد
    });
  };

  // 💾 UPDATE
  const handleUpdate = async () => {
    if (!editingProduct?.id) return;

    setUpdateLoading(true); // 🔥 start loading

    try {
      const formData = new FormData();

      formData.append("name", editForm.name || "");
      formData.append("price", Number(editForm.price || 0));
      formData.append("description", editForm.description || "");
      formData.append("product_type", editForm.product_type || ""); // 👈 اضافه شد

      if (editForm.image) {
        formData.append("image", editForm.image);
      }

      const res = await fetch(`/api/products/${editingProduct.id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Update failed");
      }

      const updated = data?.data?.[0];

      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? updated : p)),
      );
toast.success('محصول با موفقیت اپدیت شد')
      setEditingProduct(null);
    } catch (err) {
      toast.error(err.message)
    } finally {
      setUpdateLoading(false); // 🔥 stop loading
    }
  };

  return {
    products,
    loading,

    editingProduct,
    setEditingProduct,
    editForm,
    setEditForm,

    handleEditClick,
    handleUpdate,

    deletingProduct,
    setDeletingProduct,
    handleDeleteClick,
    handleConfirmDelete,
    deleteLoading,
    updateLoading,
    fetchProducts,
  };
}
