import { handleResponse } from "../utils/handleResponse";

export const productService = {
  async getAll() {
    const res = await fetch("/api/products", { cache: "no-store" });
    const data = await handleResponse(res);
    return data.data;
  },

  async create(form) {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("price", Number(form.price));
    formData.append("description", form.description);
    formData.append("product_type", form.product_type);

    if (form.image) {
      formData.append("image", form.image);
    }

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    return handleResponse(res);
  },

  async update(id, form) {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("price", Number(form.price));
    formData.append("description", form.description);
    formData.append("product_type", form.product_type);

    if (form.image) {
      formData.append("image", form.image);
    }

    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      body: formData,
    });

    const data = await handleResponse(res);

    return data.data[0];
  },

  async delete(id) {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    return handleResponse(res);
  },
};
