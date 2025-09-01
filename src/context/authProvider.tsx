"use client";
import { createSupabaseClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

type AuthContextType = {
	user: User | null;
	loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		createSupabaseClient()
			.auth.getSession()
			.then(({ data }) => {
				setUser(data.session?.user ?? null);
				setLoading(false);
			});

		const { data: listener } = createSupabaseClient().auth.onAuthStateChange(
			(_event, session) => {
				setUser(session?.user ?? null);
			}
		);

		return () => {
			listener.subscription.unsubscribe();
		};
	}, []);
	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used within AuthProvider");

	return context;
};
