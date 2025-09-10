"use server";

import { createSupabaseServer } from "@/lib/supabase/server";

export async function sendMagicLink(
	prevState: {},
	formData: FormData
): Promise<{ success: boolean; message?: string; error?: string }> {
	const supabase = await createSupabaseServer();
	const email = formData.get("email") as string;

	const { data, error } = await supabase.auth.signInWithOtp({
		email,
	});

	if (error) {
		return { success: false, error: error.message };
	}

	return { success: true, message: `Login link sent to your email ${email}` };
}

export async function googleLogin() {}
