// app/auth/callback/route.ts
import { createSupabaseClient } from "@/lib/supabase/client";
import { createSupabaseServer } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
	console.log("Callback route");

	const { searchParams } = new URL(req.url);
	const token_hash = searchParams.get("token_hash");
	if (!token_hash) return NextResponse.redirect("http://localhost:3000/error");

	const res = NextResponse.redirect("http://localhost:3000/");
	const supabase = await createSupabaseServer();

	const { error } = await supabase.auth.verifyOtp({
		token_hash,
		type: "email",
	});
	// await supabase.auth.exchangeCodeForSession({ code });

	return res;
}
