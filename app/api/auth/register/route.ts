import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import type { Database } from "@/types/supabase";

// Type pour insérer un profil
type NewProfile = Database["public"]["Tables"]["profiles"]["Insert"];

export async function POST(req: Request) {
  const { email, password, username } = await req.json();

  // 1. Création de l'utilisateur avec Supabase Auth
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError || !signUpData.user) {
    return NextResponse.json(
      { error: signUpError?.message ?? "Erreur inconnue." },
      { status: 400 }
    );
  }

  const user = signUpData.user;

  // 2. Préparation du nouveau profil
  const newProfile: NewProfile = {
    id: user.id, // même ID que dans auth.users
    username,
    aura: "neutre",
    bio: "",
    is_public: false,
  };

  // 3. Insértion sur profil dans la db
  const { error: profileError } = await supabase
    .from("profiles")
    .insert(newProfile);

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 400 });
  }

  return NextResponse.json({
    message: "Inscription réussie",
    user: user.email,
  });
}
