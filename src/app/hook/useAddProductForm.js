"use client";

import { useState } from "react";

export function useAddProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const reset = () =>
    setForm({
      name: "",
      price: "",
      description: "",
      image: null,
    });

  return { form, setForm, handleChange, reset };
}