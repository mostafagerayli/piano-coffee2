"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { productService } from "../service/product.service";

export function useUpdateProduct(setProducts) {
  const [editingProduct, setEditingProduct] = useState(null);

  const [updateLoading, setUpdateLoading] = useState(false);

  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    product_type: "",
  });

  const handleEditClick = (product) => {
    setEditingProduct(product);

    setEditForm({
      name: product.name,
      price: String(product.price),
      description: product.description,
      image: null,
      product_type: product.product_type,
    });
  };

  const handleUpdate = async () => {
    if (!editingProduct) return;

    try {
      setUpdateLoading(true);

      const updated = await productService.update(
        editingProduct.id,
        editForm
      );

      setProducts((prev) =>
        prev.map((item) =>
          item.id === editingProduct.id ? updated : item
        )
      );

      toast.success("محصول آپدیت شد");

      setEditingProduct(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  return {
    editingProduct,
    setEditingProduct,
    editForm,
    setEditForm,
    updateLoading,
    handleEditClick,
    handleUpdate,
  };
}