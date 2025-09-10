import { createSupabaseClient } from "@/lib/supabase/client";
import { UserProfile } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
	const supabase = createSupabaseClient();

	const { data, error } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", userId)
		.single();

	if (error) {
		throw new Error(`Failed to fetch user profile: ${error.message}`);
	}

	return data;
};

export const useUserData = (userId: string | undefined) => {
	return useQuery({
		queryKey: ["user-profile", userId],
		queryFn: () => fetchUserProfile(userId!),
		enabled: !!userId, // Only run when userId exists
		// staleTime: 1000 * 60 * 5, // 5 minutes
		retry: (failureCount, error) => {
			// Don't retry if it's a "not found" error
			if (error.message.includes("No rows")) return false;
			return failureCount < 2;
		},
	});
};
