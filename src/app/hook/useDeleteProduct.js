"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { productService } from "../service/product.service";


export function useDeleteProduct(setProducts) {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteClick = (product) => {
    setDeletingProduct(product);
  };

  const handleConfirmDelete = async () => {
    if (!deletingProduct) return;

    try {
      setDeleteLoading(true);

      await productService.delete(deletingProduct.id);

      setProducts((prev) =>
        prev.filter((item) => item.id !== deletingProduct.id)
      );

      toast.success("محصول حذف شد");

      setDeletingProduct(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    deletingProduct,
    setDeletingProduct,
    deleteLoading,
    handleDeleteClick,
    handleConfirmDelete,
  };
}