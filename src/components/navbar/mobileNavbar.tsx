"use client";
import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IconLink, NavLink } from "./navbar";
import { useRouter } from "next/navigation";
import { Toggle } from "../ui/toggle";

const MobileNavbar = ({
	iconLinks,
	navLinks,
}: {
	iconLinks: IconLink[];
	navLinks: NavLink[];
}) => {
	const router = useRouter();
	const [toogleNavbar, setToogleNavbar] = useState<boolean>(false);
	return (
		<>
			<div className="flex bg-white justify-between h-[10vh] items-center px-2 shadow-sm">
				<Toggle
					variant="outline"
					aria-label="Toggle italic"
					onClick={() => setToogleNavbar(!toogleNavbar)}>
					{toogleNavbar ? <X /> : <Menu />}
				</Toggle>
				<div>
					<Link href={"/"}>Logo</Link>
				</div>
				<div className="flex space-x-4">
					{iconLinks.map(({ icon, href }, index) => (
						<Link key={href + index} href={href}>
							{icon}
						</Link>
					))}
				</div>
			</div>
			{toogleNavbar && (
				<div className="absolute right-0 left-0 h-[90vh] bg-black/30 z-50">
					<div
						className={`md:max-w-sm bg-white h-full pt-10
						${toogleNavbar ? "animate-slideInleft" : "animate-slideOutLeft"}
						`}>
						{navLinks.map(({ href, label }) => (
							<div
								key={href + label}
								className="py-2 px-6 text-xl flex justify-between items-center border-y-[1px]"
								onClick={() => {
									router.push(href);
									setToogleNavbar(false);
								}}>
								{label}
								{label === "Shop" && (
									<div>
										<MoveRight />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default MobileNavbar;
