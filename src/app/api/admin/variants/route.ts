import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";


export async function GET() {
    const { data, error } = await supabaseAdmin
        .from("product_variants")
        .select(`*,
            product:product_id(*)`);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}