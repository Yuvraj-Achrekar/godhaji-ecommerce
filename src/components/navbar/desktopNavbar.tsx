import React, { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { IconLink, NavLink, ProductLink } from "./navbar";
import ProfileDropdown from "./profileDropdown";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Tables } from "@/types/database.types";

type DesktopNavbarProps = {
	navLinks: NavLink[];
	iconLinks: IconLink[];
	ProductLinks: ProductLink[];
	user: Tables<"profiles"> | undefined;
	loading: boolean;
};

const DesktopNavbar = ({
	navLinks,
	iconLinks,
	ProductLinks,
	user,
	loading,
}: DesktopNavbarProps) => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const pathname = usePathname(); // this gives current URL path

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				// scrolling down
				setShow(false);
			} else {
				// scrolling up
				setShow(true);
			}
			setLastScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);
	return (
		<div
			className={`flex justify-between mx-auto bg-white items-center h-18 ${
				show ? "translate-y-0" : "-translate-y-full duration-300"
			}`}>
			<div className="container flex justify-between mx-auto items-center max-w-7xl">
				<div>
					<Link href={"/"}>
						<Image
							src={"/assets/logo/logo-main-brown.svg"}
							height={200}
							width={200}
							alt="Logo-Main"
						/>
					</Link>
				</div>
				<div>
					<NavigationMenu>
						<NavigationMenuList>
							{navLinks.map(({ href, label }) =>
								label === "Shop" ? (
									<NavigationMenuItem key={href + label}>
										<NavigationMenuTrigger
											className={`bg-transparent ${
												pathname.startsWith("/products")
													? "text-[#9c4f2f] border-b-2 border-[#9c4f2f]"
													: ""
											}`}>
											{label}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid gap-2 grid-cols-2 lg:w-[300px] xl:w-[350px]">
												<ProductLinkItem
													title="Product 1"
													href="/products/1"
													active={pathname === "/products/1"} // ✅ correct
												>
													Description for Product 1
												</ProductLinkItem>
												<ProductLinkItem
													title="Product 2"
													href="/products/2"
													active={pathname === "/products/2"} // ✅ fix here
												>
													Description for Product 2
												</ProductLinkItem>
												<ProductLinkItem
													title="Product 3"
													href="/products/3"
													active={pathname === "/products/3"} // ✅ fix here
												>
													Description for Product 3
												</ProductLinkItem>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								) : (
									<NavigationMenuItem key={href + label}>
										<NavigationMenuLink active={pathname === href} asChild>
											<Link href={href}>{label}</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>
								)
							)}
							{iconLinks.map(({ icon, href }, index) => (
								<NavigationMenuItem key={href + index}>
									<NavigationMenuLink active={pathname === href} asChild>
										<Link href={href}>{icon}</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}

							{
								// 	loading ? (
								// 	<Loader />
								// ) :
								user ? (
									<ProfileDropdown user={user} />
								) : (
									<Link href={"/auth/login"}>
										<CircleUser size={30} />
									</Link>
								)
							}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;

type ProductLinkItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
	title: string;
	href: string;
	active?: boolean;
};

export const ProductLinkItem = ({
	title,
	children,
	href,
	active,
	...props
}: ProductLinkItemProps) => {
	return (
		<li {...props}>
			<NavigationMenuLink active={active} asChild>
				<Link href={href} className="block">
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
};
