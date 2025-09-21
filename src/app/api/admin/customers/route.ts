import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";


export async function GET() {
    const { data, error } = await supabaseAdmin
        .from("profiles")
        .select("*")
       .eq("user_role", "user");
console.log("Backend data:", data, error);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}