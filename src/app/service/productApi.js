export async function createProduct(form) {
  const formData = new FormData();

  formData.append("name", form.name);
  formData.append("price", form.price);
  formData.append("description", form.description);
  formData.append("image", form.image);

  const res = await fetch("/api/products", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error || "Request failed");
  }

  return data;
}