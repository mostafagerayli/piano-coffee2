import { supabaseAdmin } from "@/app/lib/supabaseAdmin"

export async function POST(req) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const price = formData.get("price")
    const description = formData.get("description")
    const file = formData.get("image")

    // 🧠 1. BASIC VALIDATION
    if (!name || !price) {
      return Response.json(
        { error: "Name and price are required" },
        { status: 400 }
      )
    }

    if (typeof name !== "string" || name.trim().length < 2) {
      return Response.json(
        { error: "Name is too short" },
        { status: 400 }
      )
    }

    const numericPrice = Number(price)

    if (isNaN(numericPrice) || numericPrice <= 0) {
      return Response.json(
        { error: "Price must be a valid positive number" },
        { status: 400 }
      )
    }

    if (numericPrice > 1000000) {
      return Response.json(
        { error: "Price is too large" },
        { status: 400 }
      )
    }

    // 🧠 2. DESCRIPTION VALIDATION
    if (description && description.length > 1000) {
      return Response.json(
        { error: "Description too long (max 1000 chars)" },
        { status: 400 }
      )
    }

    // 🧠 3. IMAGE UPLOAD
    let imageUrl = null

    if (file && file.size > 0) {
      const allowedTypes = ["image/png", "image/jpeg", "image/webp"]

      if (!allowedTypes.includes(file.type)) {
        return Response.json(
          { error: "Only PNG, JPG, WEBP allowed" },
          { status: 400 }
        )
      }

      const maxSize = 4 * 1024 * 1024 // 4MB

      if (file.size > maxSize) {
        return Response.json(
          { error: "Image too large (max 2MB)" },
          { status: 400 }
        )
      }

      const fileName = `${Date.now()}-${file.name}`

      const { error: uploadError } = await supabaseAdmin
        .storage
        .from("products")
        .upload(fileName, file)

      if (uploadError) {
        return Response.json(
          { error: uploadError.message },
          { status: 500 }
        )
      }

      const { data } = supabaseAdmin
        .storage
        .from("products")
        .getPublicUrl(fileName)

      imageUrl = data.publicUrl
    }

    // 🧠 4. INSERT PRODUCT (FIX مهم)
    const { data, error } = await supabaseAdmin
      .from("products")
      .insert([
        {
          name: name.trim(),
          price: numericPrice,
          description: description?.trim() || null,
          image: imageUrl,
        },
      ])
      .select()

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      data,
    })

  } catch (err) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}


export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .order("id", { ascending: false })

  if (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return Response.json({ data })
}