import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";


export async function GET() {
    const { data, error } = await supabaseAdmin
        .from("orders")
        .select(`
        *,
        profiles:user_id (*),
        addresses:address_id (*)`);
    
    console.log(data);
    

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}