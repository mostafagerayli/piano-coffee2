import { supabaseAdmin } from "@/app/lib/supabaseAdmin"

export async function DELETE(req, { params }) {
  const { id } = await params

  const { error } = await supabaseAdmin
    .from("products")
    .delete()
    .eq("id", id)

  if (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return Response.json({ success: true })
}

export async function PUT(req, { params }) {
  try {
    const { id } =await params; // ✅ FIX

    if (!id) {
      return Response.json(
        { error: "Missing product id" },
        { status: 400 }
      );
    }

    const body = await req.json();

    const { name, price, description, image } = body;

    // 🧠 1. VALIDATION NAME
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return Response.json(
        { error: "Invalid name" },
        { status: 400 }
      );
    }

    // 🧠 2. VALIDATION PRICE
    const numericPrice = Number(price);

    if (isNaN(numericPrice) || numericPrice <= 0) {
      return Response.json(
        { error: "Invalid price" },
        { status: 400 }
      );
    }

    if (numericPrice > 1000000) {
      return Response.json(
        { error: "Price too large" },
        { status: 400 }
      );
    }

    // 🧠 3. VALIDATION DESCRIPTION
    if (description && description.length > 1000) {
      return Response.json(
        { error: "Description too long" },
        { status: 400 }
      );
    }

    // 🧠 4. OPTIONAL IMAGE VALIDATION
    let imageUrl = image || null;

    if (image && typeof image !== "string") {
      return Response.json(
        { error: "Invalid image format" },
        { status: 400 }
      );
    }

    // 🧠 5. UPDATE DB
    const { data, error } = await supabaseAdmin
      .from("products")
      .update({
        name: name.trim(),
        price: numericPrice,
        description: description?.trim() || null,
        image: imageUrl,
      })
      .eq("id", id)
      .select();

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (err) {
    return Response.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}