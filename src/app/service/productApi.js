export async function createProduct(form) {
  const formData = new FormData();

  formData.append("name", form.name);
  formData.append("price", form.price);
  formData.append("description", form.description);
  formData.append("image", form.image);
  formData.append("product_type", form.product_type); // 👈 مهم

  const res = await fetch("/api/products", {
    method: "POST",
    body: formData,
  });

  // 🔥 اینو امن کن
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;

  if (!res.ok) {
    throw new Error(data?.error || "Request failed");
  }

  return data;
}