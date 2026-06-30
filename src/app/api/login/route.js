import { supabase } from "@/app/lib/supabaseClient"

export async function POST(req) {
  const { email, password } = await req.json()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 400 })
  }

  return Response.json({ data }, { status: 200 })
}