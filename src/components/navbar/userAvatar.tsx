import { useAuth } from "@/providers/authProvider";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const UserAvatar = () => {
	const { user } = useAuth();

	return (
		<Avatar>
			{/* <AvatarImage src={}/> */}
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
};

export default UserAvatar;
