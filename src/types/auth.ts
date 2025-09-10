export type MagicLinkResponse = {
	success: boolean;
	message?: string;
	error?: boolean;
};

export interface UserProfile {
	id: string;
	email?: string;
	name?: string;
	avatar_url?: string;
	created_at?: string;
	updated_at?: string;
	// Add other fields from your profiles table
}
