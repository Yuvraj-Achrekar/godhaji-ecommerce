"use client";
import { GalleryVerticalEnd, MoveLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createSupabaseClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { sendMagicLink } from "@/actions/auth";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [email, setEmail] = useState<string>("");
	const router = useRouter();

	// async function sendMagicLink(e: React.FormEvent) {
	// 	e.preventDefault();
	// 	try {
	// 		const supabase = createSupabaseClient();
	// 		const { data, error } = await supabase.auth.signInWithOtp({
	// 			email,
	// 			options: {
	// 				shouldCreateUser: true,
	// 				emailRedirectTo: "http://localhost:3000/",
	// 			},
	// 		});
	// 		if (data) {
	// 			toast.success(`Magic link sent to your email ${email}`);
	// 			setEmail("");
	// 		}
	// 	} catch (error) {
	// 		console.log("Error sending magic link", error);
	// 	}
	// }

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<form action={sendMagicLink}>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center gap-2 relative">
						<a
							href="#"
							className="flex flex-col items-center gap-2 font-medium">
							<div className="flex size-8 items-center justify-center rounded-md">
								<GalleryVerticalEnd className="size-6" />
							</div>
							<span className="sr-only">GodhaJi Logo</span>
						</a>
						<h1 className="text-xl font-bold">Welcome to GodhaJi</h1>
						<div className="text-center text-sm">
							Enter your email and we'll send you a login link
						</div>
						<div
							// variant={"link"}
							// type="button"
							className="absolute top-0 left-0"
							onClick={() => router.back()}>
							<MoveLeft />
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<div className="grid gap-3">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="m@example.com"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Login
						</Button>
					</div>
					<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
						<span className="bg-background text-muted-foreground relative z-10 px-2">
							Or
						</span>
					</div>
					<div className="">
						<Button variant="outline" type="button" className="w-full">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
									fill="currentColor"
								/>
							</svg>
							Continue with Google
						</Button>
					</div>
				</div>
			</form>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
				and <a href="#">Privacy Policy</a>.
			</div>
		</div>
	);
}
