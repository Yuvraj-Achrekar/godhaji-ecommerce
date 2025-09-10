import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserProfile } from "@/types/auth";

type ProfileDropdownProps = {
	user: UserProfile | null;
};

const ProfileDropdown = ({ user }: ProfileDropdownProps) => {
	const router = useRouter();

	const supabaseSignout = async () => {
		const supabase = createSupabaseClient();
		const { error } = await supabase.auth.signOut();
		if (error) {
			return toast.error(error.message);
		}
		toast.success("Signed out successfully");
		router.refresh();
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage src={user?.avatar_url} />
					<AvatarFallback color="blue">
						{user?.email?.slice(0, 2).toLocaleUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-24 z-[1000]">
				{/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
				<DropdownMenuItem>
					<Link href={"/profile"}>My Account</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>My Orders</DropdownMenuItem>
				<DropdownMenuItem>
					<a onClick={supabaseSignout}>Sign out</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ProfileDropdown;
