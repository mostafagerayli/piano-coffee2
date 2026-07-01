import { supabaseAdmin } from "@/app/lib/supabaseAdmin";

export async function DELETE(req, { params }) {
  const { id } = await params;

  const { error } = await supabaseAdmin.from("products").delete().eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return Response.json({ error: "Missing id" }, { status: 400 });
    }

    const formData = await req.formData();

    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    const file = formData.get("image");
    const product_type = formData.get("product_type");

    // VALIDATION
    if (!name || typeof name !== "string") {
      return Response.json({ error: "Invalid name" }, { status: 400 });
    }

    const numericPrice = Number(price);

    if (isNaN(numericPrice) || numericPrice <= 0) {
      return Response.json({ error: "Invalid price" }, { status: 400 });
    }

    let imageUrl = null;

    // اگر فایل جدید بود → upload کن
    if (file && typeof file !== "string") {
      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabaseAdmin.storage
        .from("products")
        .upload(fileName, file);

      if (uploadError) {
        return Response.json({ error: uploadError.message }, { status: 500 });
      }

      const { data } = supabaseAdmin.storage
        .from("products")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    const { data, error } = await supabaseAdmin
      .from("products")
      .update({
        name: name.trim(),
        price: numericPrice,
        description: description || null,
        product_type: product_type || null,
        ...(imageUrl && { image: imageUrl }),
      })
      .eq("id", id)
      .select();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json(
      { error: err.message || "Server error" },
      { status: 500 },
    );
  }
}
