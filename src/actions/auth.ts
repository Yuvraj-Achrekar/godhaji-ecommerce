"use server";

import { createSupabaseServer } from "@/lib/supabase/server";

export async function sendMagicLink(formData: FormData): Promise<void> {
	const supabase = await createSupabaseServer();
	const email = formData.get("email") as string;
	console.log(email);

	const { data, error } = await supabase.auth.signInWithOtp({
		email,
	});

	if (error) {
		console.log("error message", error.message);
		return;
	}

	console.log(`Magic link sent to your email ${email}`);
	return;
}
